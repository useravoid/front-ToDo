
document.addEventListener('DOMContentLoaded',
                          function() 
                            {
                              var forma=document.querySelector("#forma");
                              var unos=document.querySelector("#unos");
                              var broj_taskova = 0;

                              forma.addEventListener('submit',dodajTask);

                              function dodajTask(e)
                                {
                                  if (unos.value === '')
                                    {
                                      alert("unesite nesto");
                                    }
                                  else
                                    {
                                      var li = document.createElement('li');
                                      var span = document.createElement('span');
                                      var img = document.createElement('img');
                                      var bojac = document.createElement('form');
                                      // ubaci ikonu za x
                                      img.src="Assets/Images/x-circle.svg";
                                      img.height=16;
                                      // uzmi vrednost iz inputa forme
                                      span.textContent = unos.value;
                                      // dodaj unos,dodaj formu za boju i dodaj img za x
                                      document.querySelector(".taskovi").appendChild(li).appendChild(span);
                                      document.querySelector(".taskovi").appendChild(li).appendChild(bojac);
                                      document.querySelector(".taskovi").appendChild(li).appendChild(img);
                                      bojac.innerHTML="<div><input type='color'></div>";
                                      bojac.addEventListener('input',farbaj);
                                      function farbaj(e)
                                        {
                                          li.style.background = bojac.children[0].children[0].value;
                                        }

                                      broj_taskova = broj_taskova + 1;
                                      
                                      document.querySelector('.brojac').textContent = "Broj preostalih taskova:" + broj_taskova;

                                      // ukloni kad se klikne na img x  
                                      img.addEventListener('click', obrisi);
                                      function  obrisi () 
                                        {
                                          img.parentElement.remove();
                                          broj_taskova = broj_taskova - 1 ;
                                          document.querySelector('.brojac').textContent = "Broj preostalih taskova:" + broj_taskova;
                                          
                                        }
                                    }
                                  e.preventDefault();
                                }
                            });     
  
                                  
