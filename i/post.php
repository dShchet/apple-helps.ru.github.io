<?
if (isset ($_POST['messageFF'])) {
  mail ("levelseo8@gmail.com",
        "��������� ���������� ����� � ".$_SERVER['HTTP_REFERER'],
        "���: ".$_POST['nameFF']."\nEmail: ".$_POST['contactFF']);
  echo ('<p style="color: green">���� ��������� ��������, �������!</p>');
}
?>