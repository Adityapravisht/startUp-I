import MyImage from '../atoms/MyImage'

export const FooterBg = () => {
  return (
   <div className="footerImage">
        <MyImage src={"./archsImage.png"} />

        <MyImage src={"./archsImage.png"} className="revimage"/>
      </div>
  )
}
