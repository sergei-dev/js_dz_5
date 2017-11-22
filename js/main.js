window.onload = function () {
    /* task 1 */
    let btn_leng = document.querySelector('#task1 button');
    let inp_leng = document.querySelector('#task1 input');
    let leng_result = document.querySelector('#task1 p');
    function get_input_length() {
        let value = inp_leng.value;
        let length_inp = value.length;
        leng_result.innerHTML = `Длина значения: ${length_inp}`;
    }
    inp_leng.addEventListener('input', get_input_length);

    /* task 2 */
    let images = ['img/image-1.jpg','img/image-2.jpg','img/image-3.jpg','img/image-4.jpg','img/image-5.jpg','img/image-6.jpg'];
    let result_img = document.querySelector('.img_cont');
    let btn_img = document.querySelector('#task2 button');
    function get_images_show() {
        for(let i = 0; i < images.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('src', images[i]);
            result_img.appendChild(img);
        }
    }
    btn_img.addEventListener('click', get_images_show);
    /* task 3 */
    let inp_url = document.querySelector('#task3 input');
    let result_url = document.querySelector('.url_cont');
    function get_string_url() {
        let value = inp_url.value;
        if(value.indexOf('https://') === 0) {
            result_url.innerHTML = value.slice('https://'.length);
        }
        else if(value.indexOf('http://') === 0) {
            result_url.innerHTML = value.slice('http://'.length);
        }
    }
    inp_url.addEventListener('input', get_string_url);

    /* task 4 */
    let inp_url_two = document.querySelector('#task4 input');
    let result_url_two = document.querySelector('.url_cont_two');
    let arr_string = ['http://','https://','http://www.','https://www.'];
    function arr_string_url() {
        let value = inp_url_two.value;
        for(let i = 0; i < arr_string.length; i++) {
            if(value.indexOf(arr_string[i]) === 0) {
                result_url_two.innerHTML = value.slice(arr_string[i].length);
                break;
            }
        }


    }
    inp_url_two.addEventListener('input', arr_string_url);

    /* task 5 */
    let form_el = document.querySelectorAll('form input');
    let lbl = document.querySelectorAll('.lbl');
    function get_validation() {
        let mail_pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        for(let i = 0; i < form_el.length; i++) {
            form_el[i].value.trim();
            if(form_el[i].value === '') {
                lbl[i].classList.remove('succes');
                form_el[i].classList.remove('succes_bord');
                lbl[i].classList.add('error');
                form_el[i].classList.add('error_bord');
                lbl[i].textContent = 'Заполните все поля';
            }
            else if (form_el[i].value.length < 5 && i!==2 && i!==3) {
                lbl[i].classList.remove('succes');
                form_el[i].classList.remove('succes_bord');
                lbl[i].classList.add('error');
                form_el[i].classList.add('error_bord');
                lbl[i].textContent = 'Поле должно иметь не менее 5 символов';
                lbl[2].textContent = 'В поле пароль должно быть не менее 12 символов';
                lbl[3].textContent = 'В поле ввода e-mail должен быть символ @';

            }
            else if (form_el[i].value.length === 5 && i!==2 && i!==3)  {
                lbl[i].classList.add('succes');
                form_el[i].classList.add('succes_bord');
                lbl[i].classList.add('error');
                form_el[i].classList.add('error_bord');
                lbl[i].textContent = 'Поле успешно заполнено';
            }
            else if(form_el[2].value.length <= 12) {
                lbl[2].classList.remove('succes');
                form_el[2].classList.remove('succes_bord');
                lbl[2].classList.add('error');
                form_el[2].classList.add('error_bord');
                lbl[2].textContent = 'В поле пароль должно быть не менее 12 символов';
            }
            else if(form_el[2].value.length > 12) {
                lbl[2].classList.add('succes');
                form_el[2].classList.add('succes_bord');
                lbl[2].textContent = 'Поле пароль заполненно успешно';
            }
            else if(mail_pattern.test(form_el[3].value) === false) {
                lbl[3].classList.remove('succes');
                form_el[3].classList.remove('succes_bord');
                lbl[3].classList.add('error');
                form_el[3].classList.add('error_bord');
                lbl[3].textContent = 'В поле ввода e-mail должен быть символ @';
            }
            else if(mail_pattern.test(form_el[3].value) === true) {
                lbl[3].classList.remove('error');
                form_el[3].classList.remove('error_bord');
                lbl[3].classList.add('succes');
                form_el[3].classList.add('succes_bord');
                lbl[3].textContent = 'Поле email заполненно правильно';
            }



        }


    }
    for(let i = 0; i < form_el.length; i++) {
        form_el[i].addEventListener('input', get_validation);
    }
    /* task 6 */
    let char_code_inp = document.querySelector('#task6 input');
    function get_char_code() {
        let value = char_code_inp.value;
        let char_code_result = document.querySelector('#task6 p');
        char_code_result.innerHTML = value.charCodeAt(value);
    }
    char_code_inp.addEventListener('blur', get_char_code);
};
