exports.header = null;

exports.footer = {
  height: '1cm',
  contents: function(pageNum, numPages){
    return '<footer style="font-size: 10px"><span style="float:right">Pagina '+pageNum+' van '+numPages+'</span></footer>';
  }
}
