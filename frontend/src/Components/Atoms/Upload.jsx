
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import axios from "axios";

const MAX_SIZE = 500 * 1024 * 1024; // 500 MB

export default function Upload() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [file, setFile] = useState(null); // single file
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState(null);

  useEffect(() => {
        if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    if (fileRejections && fileRejections.length > 0) {
      const msg = fileRejections[0].errors.map(e => e.message).join(", ");
      setMessage({ type: "error", text: `File rejected: ${msg}` });
      return;
    }

    if (acceptedFiles && acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setMessage(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: MAX_SIZE,
    accept: { "video/*": [] },  
  });

  const removeFile = () => {
    setFile(null);
    setMessage(null);
  };

  const onSubmit = async (data) => {
    if (!file) {
      setMessage({ type: "error", text: "Please select a video file before uploading." });
      return;
    }

    setUploading(true);
    setProgress(0);
    setMessage(null);

    try {
      const fd = new FormData();
      fd.append("video", file); 
      fd.append("title", data.title);
      fd.append("description", data.description);
      fd.append("category", data.category);

      const res = await axios.post("http://localhost:8000/videos/upload", fd, {
        withCredentials: true, 
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (evt) => {
          if (evt.total) {
            const percent = Math.round((evt.loaded * 100) / evt.total);
            setProgress(percent);
          }
        },
      });

      setMessage({ type: "success", text: "Upload successful!" });
      reset();
      removeFile();
      console.log("server response:", res.data);
    } catch (err) {
      console.error("Upload error:", err.response || err.message || err);
      const errMsg = err?.response?.data?.message || "Upload failed.";
      setMessage({ type: "error", text: errMsg });
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, marginInline: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Upload Video</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 12 }}>
        <input
          placeholder="Title"
          {...register("title", { required: "Title is required" })}
          style={{ padding: 10, borderRadius: 6 }}
        />
        {errors.title && <small style={{ color: "red" }}>{errors.title.message}</small>}

        <textarea
          placeholder="Description"
          {...register("description", { required: "Description is required" })}
          style={{ padding: 10, borderRadius: 6, minHeight: 80 }}
        />
        {errors.description && <small style={{ color: "red" }}>{errors.description.message}</small>}

        <input
          placeholder="Category"
          {...register("category", { required: "Category is required" })}
          style={{ padding: 10, borderRadius: 6 }}
        />
        {errors.category && <small style={{ color: "red" }}>{errors.category.message}</small>}

        {/* Dropzone */}
        <div
          {...getRootProps()}
          style={{
            border: "2px dashed #999",
            padding: 18,
            borderRadius: 8,
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <input {...getInputProps()} />
          {file ? (
            <div>
              <strong>Selected:</strong> {file.name} ({Math.round(file.size / (1024 * 1024))} MB)
              <div style={{ marginTop: 10 }}>
                {previewUrl && (
                  <video
                    src={previewUrl}
                    controls
                    style={{ maxWidth: "100%", maxHeight: 280, borderRadius: 6 }}
                  />
                )}
              </div>
              <div style={{ marginTop: 8 }}>
                <button type="button" onClick={removeFile} disabled={uploading} style={{ padding: "6px 10px" }}>
                  Remove file
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p style={{ margin: 0 }}>
                Drag & drop a video here, or click to select (Max size: 500MB)
              </p>
              <small>Accepted: mp4, mov, avi, mkv</small>
            </div>
          )}
        </div>

        {/* Upload progress */}
        {uploading && (
          <div style={{ marginTop: 6 }}>
            <div style={{ height: 8, background: "#eee", borderRadius: 6, overflow: "hidden" }}>
              <div style={{ width: `${progress}%`, height: "100%", background: "#4caf50" }} />
            </div>
            <small>{progress}%</small>
          </div>
        )}

        {/* Message */}
        {message && (
          <div style={{ color: message.type === "error" ? "crimson" : "green" }}>{message.text}</div>
        )}

        <div style={{ textAlign: "center", marginTop: 8 }}>
          <button type="submit" disabled={uploading} style={{ padding: "10px 16px", borderRadius: 6 }}>
            {uploading ? "Uploading..." : "Upload Video"}
          </button>
        </div>
      </form>
    </div>
  );
}
