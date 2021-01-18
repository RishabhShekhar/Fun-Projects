from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.pdfpage import PDFPage
from pdfminer.converter import TextConverter
from pdfminer.layout import LAParams
import io


def pdf_to_txt(inPDF, outTXT):
    inFile = open(inPDF, 'rb')
    resMgr = PDFResourceManager()  # stores all resources like fonts, images etc.
    retData = io.StringIO()  # final text representation of PDF
    TxtConverter = TextConverter(resMgr, retData, laparams=LAParams())
    # LAParams are layout parameters which we can adjust like character margin, word margin etc.
    # TextConverter checks all things are available to convert text
    interpreter = PDFPageInterpreter(resMgr, TxtConverter)  # changes pdf to txt

    for page in PDFPage.get_pages(inFile):
        interpreter.process_page(page)

    txt = retData.getvalue()
    with open(outTXT, 'w') as f:
        f.write(txt)


inPDF = 'Memorandum.pdf'
outTXT = 'Memorandum.txt'
pdf_to_txt(inPDF, outTXT)
print("PDF Converted to TXT")
