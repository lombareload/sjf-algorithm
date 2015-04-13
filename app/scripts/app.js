$(function(){
  var queue = new Queue();
  function queueAsTable(){
    return queue.values().map(function(element){
      var html = '<tr><td>' + element.index + '</td>' +
        '<td>' + element.rafaga + '</td></tr>';
      return $(html);
    });
  }

  function getProcess(){
    var value = $('#rafaga').val();
    console.log('value', value);
    var rafaga = parseInt(value);
    return new Element(rafaga);
  }

  $('#agregar').click(function(){
    queue.enqueue(getProcess());
    var view = $('#process-ready-view');
    view.html('');
    view.html(queueAsTable());
  });

  console.log("holaa!");
});
