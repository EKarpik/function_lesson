
function kolobok (hero) {
    switch (hero) {
        case 'дедушка':  // if (x === 'value1')
        console.log("Я от дедушки ушёл");
              break;

        case 'заяц':  
        console.log("Я от зайца ушёл");
          break;

        case 'лиса':  
        console.log("Меня съели");
          break;

        default:
            console.log( "Таких персонажей не встречал" );
        }
      }


      function newYear (person) {
        switch (person) {
            case 'Дед Мороз':  
            case 'Снегурочка':
             const result = `${person}!${person}!${person}!` 
             console.log(result)
             return result;
                  break;
                
        }}

      kolobok('дедушка') 
      kolobok('заяц')
      kolobok('лиса') 

      newYear('Снегурочка')
      newYear('Дед Мороз')


