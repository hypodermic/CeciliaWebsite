$(document).ready(function(){
  var engBio = "I am anthropologist working on various projects related to Linguistics and Sustainability. I am also learning computer programming in order to improve my projects by applying this knowledge.";
  var engLing = "Considering the important connection between Language and Culture, I decided to work on promoting regional languages among their younger speakers. Currently focusing on Quechua, a language  from the Andes which is rapidly declining due to many social factors, I wrote and illustrated a children's story and had it translated it with the help of a native speaker. It is my intention that bilingual children will benefit from written material in their language so they continue learning it and thus preserving their rich cultural traditions.";
  var engAqua = "Industrial agriculture produces large quantities of food but has a detrimental impact of the environment and human health. Already people are experimenting with different kinds of techniques, including Aquaponics which recirculates water and nutrients between plants and fish. On a small scale, I have managed to grow basil and parsley utilizing limitied resources and investing minimal care in the system. Currently, I have plans to expand my aquaponics system and make it more efficient by using different sensors and automating routine checkups.";
  var espBio = "Soy antropóloga y estoy trabajando en diversos proyectos relacionados con la lingüística y la  sostenibilidad. También estoy aprendiendo programación para mejorar mis proyectos aplicando este conocimiento.";
  var espLing = "Considerando la importante conexión entre el lenguaje y la cultura, decidí trabajar en promover idiomas regionales entre sus hablantes más jóvenes. Actualmente enfocándome en el quechua, un idioma de los Andes que está declinando rápidamente debido a muchos factores sociales, escribí e ilustré una historia infantil y la traduje con la ayuda de un traductor. Es mi intención que los niños bilingües se beneficien con material escrito en su idioma para que continúen aprendiendo y preservando sus tradiciones culturales.";
  var espAqua = "La agricultura industrial produce grandes cantidades de alimentos pero tiene un impacto perjudicial en el medio ambiente y en la salud humana. La gente ya está experimentando con diferentes técnicas, incluida la acuaponia, que recircula agua y nutrientes entre plantas y peces. A pequeña escala, he logrado cultivar albahaca y perejil utilizando recursos limitados e invirtiendo un cuidado mínimo en el sistema. Actualmente, tengo planes de expandir mi sistema y hacerlo más eficiente mediante el uso de sensores y la automatización de chequeos";
  
  $(".bio").text(engBio);
  $(".ling").text(engLing);
  $(".aqua").text(engAqua);
  var idioma;
  $(".language").click(function(){
    if (!idioma){
    $(".bio").text(espBio);
    $(".ling").text(espLing);
    $(".aqua").text(espAqua);
      idioma = true;
    } else {
      $(".bio").text(engBio);
      $(".ling").text(engLing);
      $(".aqua").text(engAqua);
      idioma = false;
    }
  });
});