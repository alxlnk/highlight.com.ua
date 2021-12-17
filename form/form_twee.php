<?php if (!isset($_GET['property_64'], $_GET['property_65'])) { ?>
    <form id="form_18" class="uk-form-horizontal" method="post">
        <div class="uk-text-center uk-margin">
            <b class="result"></b>
        </div>
        <input type="text" name="property_64" class="uk-input uk-form-width-medium" placeholder="Имя" required="required" />
        <input type="text" name="property_65" class="uk-input uk-form-width-medium" placeholder="E-mail" required="required" />
        <input type="text" name="property_66" class="uk-input uk-form-width-medium" placeholder="Текст" />
        <input type="hidden" name="captcha_id" value="0" />
        <input type="hidden" name="send_form" value="1" />
        <input type="hidden" name="form_id" value="18" />
        <input type="submit" name="submit" value="Отправить" class="el-button uk-button uk-button-default" />
    </form>
    <script type="text/javascript" language="JavaScript">

        $('#form_18').bind("submit", function(){
            var form = $(this);
            SendForm(form);
            return false;
        });

    </script>
<?php } else {
    mail('hl1@ukr.net', 'Site highlight.com.ua', implode(PHP_EOL, [$_GET['property_64'], $_GET['property_65'], $_GET['property_66']]));

    echo "1";
}
