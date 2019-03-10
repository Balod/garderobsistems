<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../public-html/css/fonts.css">
    <title>GARDEROBSISTEMS.RU</title>
</head>
<body>
    <div class="wrap">
        <h1><span>Спасибо</span> мы свяжемся с Вами в ближайшее время!</h1>
        <a class="back" href="https://garderobsistems.000webhostapp.com/">Вернуться на сайт</a>
    </div>
    <style>
        body {
            background: url(../img/coast-bg.png) center;
            font-family: 'Gotham Pro';
        }
        .wrap {
            height: 400px;
            max-width: 400px;
            border-radius: 30px;
            margin-left: auto;
            margin-right: auto;
            background-color: #ffffff;
            box-shadow: 0px 20px 30px 0px #d4d4d4;
        }
        h1 {
            font-size: 28px;
            padding-top: 50px;
            text-align: center;
            padding-left: 20px;
            padding-right: 20px;
        }
        h1 span {
            color: #67ab42;
        }
        a {
            font-size: 14px;
            display: block;
            width: 250px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            border-radius: 50px;
            color: #ffffff;
            text-decoration: none;
            padding-top: 20px;
            padding-bottom: 20px;
        }
        .back {
            background: linear-gradient(to top, #63a440, #7dce4e);
            border-bottom: 3px solid #4c8d27;
            margin-top: 90px;
        }
        .back:hover {
            background: linear-gradient(to top, #68aa44, #88d659);
            box-shadow: 0 5px 20px #91c572;
            text-decoration: none;
        }
    </style>
</body>
</html>
<?php
/*-------------Получаем данные из формы-------------*/
$to = "info@garderobsistem.ru";
$subject = "Тест-драйв гардеробной";
$phone = $_POST['phone'];
$name = $_POST['name'];
$subjeckField = "Из формы: ";
$txt="";
/*------------Отправляем данные на почту------------*/
mail($to,$subject,$name,$phone);
/*Обработка телефона и имени для отправки в телеграм*/
if ($_SERVER["REQUEST_METHOD"] == "POST") {     
    if (isset($_POST['phone'])) {
      if (!empty($_POST['phone'])){
      $phone = strip_tags($_POST['phone']);
      $phoneFieldset = "Телефон: ";
      }
    };
    if (isset($_POST['name'])) {
        if (!empty($_POST['name'])){
        $name = strip_tags($_POST['name']);
        $nameFieldset = "Имя: ";
        }
      };
};
    /*Готовим данные для отправки в телеграм*/
    $token = "594700312:AAHFHbiaU8i5ItkumlnDVEBFXF2HIVZyHVA";
    $chat_id = "-346160578";
    $arr = array(
      $subjeckField => $subject,
      $nameFieldset => $name,
      $phoneFieldset => $phone
    );
    foreach($arr as $key => $value) {
      $txt .= "<b>".$key."</b> ".$value."%0A";
    };
    /*Отправка данных в телеграм*/
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>