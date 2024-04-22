// function mainMenu() {
//     let expandedLink =  document.querySelectorAll('.expanded-link');
//   expandedLink.forEach(link=>{
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//           //////// сворачивание менюшек
//         document.querySelectorAll('.container-nav').forEach(item=>{
//             item.style.display = 'none';
//         })
//             ///// разворачивание нужной
//         let expandItem = document.querySelector(`.${link.dataset.expand}`)
//         expandItem.style.display = 'block';
//     })

//   })
//   setTimeout(function(){
//     document.addEventListener('click', function(event) {
//       if (!event.target.closest('.expanded-nav')) {
//           // если клик был сделан вне блока .expanded-nav, то сворачиваем все менюшки
//           document.querySelectorAll('.container-nav').forEach(item => {
//               item.style.display = 'none';
//           });
//       }
//   });
//   },200)
  
// }
// module.exports = mainMenu;
function mainMenu() {
  let expandedLink = document.querySelectorAll('.expanded-link');
  
  expandedLink.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          // сворачивание всех менюшек перед открытием нужной
          document.querySelectorAll('.container-nav').forEach(item => {
              item.style.display = 'none';
          });
          // разворачивание нужной менюшки
          let expandItem = document.querySelector('.' + link.dataset.expand);
          expandItem.style.display = 'block';
          event.stopPropagation(); // остановка распространения события на документ
      });
  });

  setTimeout(function(){
      document.addEventListener('click', function(event) {
          if (!event.target.closest('.expanded-nav')) {
              // если клик был сделан вне блока .expanded-nav, то сворачиваем все менюшки
              document.querySelectorAll('.container-nav').forEach(item => {
                  item.style.display = 'none';
              });
          }
      });
  }, 200);
}

module.exports = mainMenu;