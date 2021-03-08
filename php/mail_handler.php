<?php
if (isset($_POST['submit'])) {
    $to = "quiz24-job@yandex.ru";
    $radio = $_POST['radio'];
    $tel = $_POST['tel'];
    mail($to, $tel, $radio);
    echo "Почта отправлена. Спасибо, мы свяжемся с вами в ближайшее время.";
}
?>