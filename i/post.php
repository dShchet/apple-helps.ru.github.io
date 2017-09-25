<?
if (isset ($_POST['messageFF'])) {
  mail ("levelseo8@gmail.com",
        "заполнена контактная форма с ".$_SERVER['HTTP_REFERER'],
        "Имя: ".$_POST['nameFF']."\nEmail: ".$_POST['contactFF']);
  echo ('<p style="color: green">Ваше сообщение получено, спасибо!</p>');
}
?>