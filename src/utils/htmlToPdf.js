import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default{
  install (Vue, options) {
    Vue.prototype.getPdf = function (dom) {
      html2Canvas(dom, {
        allowTaint: true
      }).then(function (canvas) {
        let contentWidth = canvas.width
        let contentHeight = canvas.height
        let pageHeight = contentWidth / 592.28 * 841.89
        let leftHeight = contentHeight
        let position = 0
        let imgWidth = 595.28
        let imgHeight = 592.28 / contentWidth * contentHeight
        let pageData = canvas.toDataURL('image/jpeg', 1.0)
        let PDF = new JsPDF('', 'pt', 'a4')
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        var datauri = PDF.output('dataurlstring'); 
        let link = document.createElement('a')
            link.href = datauri
            link.setAttribute('download', '税务报告.pdf')
            link.target='_blank'
            document.body.appendChild(link)
            link.click()
        // const fd = new FormData();
        // fd.append('fileStr', base64Code);
        // fd.append('imageUrl', '');
        // status = true;
        // uploadReport(fd).then(response => {
        //     // status = false;
        //     let url = response
        //     let link = document.createElement('a')
        //     link.href = url
        //     link.setAttribute('download', '税务报告.pdf')
        //     link.target='_blank'
        //     // document.body.appendChild(link)
        //     link.click()
        // });
        // PDF.save('税务报告' + '.pdf')
      }
      )
    }
  }
}