module.exports = function toReadable (number) {
  var finalText = '';
  var NumberArray = number.toString();
  let map = new Map();
  map.set('0','');
  map.set('00','');
  map.set('1','one');
  map.set('2','two');
  map.set('3','three');
  map.set('4','four');
  map.set('5','five');
  map.set('6','six');
  map.set('7','seven');
  map.set('8','eight');
  map.set('9','nine');
  map.set('10','ten');
  map.set('11','eleven');
  map.set('12','twelve');
  map.set('13','thirteen');
  map.set('14','fourteen');
  map.set('15','fifteen');
  map.set('16','sixteen');
  map.set('17','seventeen');
  map.set('18','eighteen');
  map.set('19','nineteen');
  map.set('20','twenty');
  map.set('30','thirty');
  map.set('40','forty');
  map.set('50','fifty');
  map.set('60','sixty');
  map.set('70','seventy');
  map.set('80','eighty');
  map.set('90','ninety');
  
  for (var i=0; i<NumberArray.length; i+=1) {
    
    if (NumberArray.length === 3){
      if (i === 0){
        finalText+=map.get(NumberArray[i])+' hundred';
      } else {
        if (i === 1) {
          if (map.has(NumberArray[i]+NumberArray[i+1])) {
            finalText+=' '+map.get(NumberArray[i]+NumberArray[i+1]);
            return finalText.trim();
          } else {
            finalText+=' '+map.get(NumberArray[i]+0);
          }
        } else {
          
           finalText=finalText.trim()+' '+map.get(NumberArray[i]);
        }
      }
    } else if (NumberArray.length === 2){
        if (map.has(NumberArray[i]+NumberArray[i+1])) {
          finalText=finalText.trim()+map.get(NumberArray[i]+NumberArray[i+1]);
          return finalText;
        } else {
          finalText=finalText+map.get(NumberArray[i]+0)+' '+map.get(NumberArray[i+1]);
          return finalText;
        }
    } else if (NumberArray.length === 1) {
        if (NumberArray[i] == '0') {
          return 'zero';
        }
        return map.get(NumberArray[i]);
    }
  }
  return finalText
}
