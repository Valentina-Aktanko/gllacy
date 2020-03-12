# Техническое задание

## __Проект: Глейси__

* Название сайта: Глейси
* Домен: пока нет
### 1. Общие технические требования
  * Стандарты вёрстки: HTML5, CSS3, прогрессивное улучшение.
  * Сетка: четыре колонки равной ширины (22.2%).
  * Два варианта вёрстки:
    * с фиксированной шириной 1200px с центровкой основного контента, с некоторыми блоками, которые тянутся на всю ширину окна браузера;
    * с дополнительной резиновостью (необязательный вариант): диапазон ширин от 900px до 1200px. При этом основной шириной является 1200px, и для неё проверяется полное соответствие макету.
  * Используемые фреймворки: нет.
  * Кроссбраузерность: IE11+, Chrome, Firefox, Opera, Safari.
  * Типографика: частично определена в макете (прочее — на усмотрение разработчика).
  * Используемый шрифт: Roboto (есть в папке с макетом и на Google Fonts).
  * С макетом предоставлен styleguide.psd, содержащий прорисовку состояний элементов интерфейса. При любых расхождениях с макетами он должен иметь наивысший приоритет.
### 2. Обязательные требования
  __Все макеты:__
  * Контентная область центрируется и не может быть уже макетной ширины.
  * Внутренние отступы слева и справа для обеих страниц — по 2.3% от ширины всей контентной области.
  * Отступы между колонками сетки одинаковые — по 2.2% от ширины всей контентной области.
  * При достижении 1200px сетка перестаёт масштабироваться дальше.
  * Логотип не является пунктом меню. Его нужно размечать отдельным элементом.
  * Главное меню — при наведении на пункт меню «Каталог» появляется подменю (смотрите папку слоёв «Ховеры» в gllacy-index.psd).
  * Главное меню — пункт подменю «Сливочное» должен вести на внутреннюю страницу (gllacy-catalog.psd).
  * Шапка — при наведении на кнопку поиска появляется форма для ввода текста (смотрите папку слоёв «Ховеры» в gllacy-index.psd).
  * Шапка — при наведении на кнопку «Вход» появляется форма для авторизации (смотрите папку слоёв «Ховеры» в gllacy-index.psd).
  * Логотип Академии и ссылка HTML Academy в подвале ведут на [лендинг интенсива «Профессиональный HTML и CSS, уровень 1»](https://htmlacademy.ru/intensive/htmlcss).
  
__gllacy-index.psd:__
  * Логотип не является ссылкой.
  * Карусель под шапкой страницы: слайдер. Вёрстка всех слайдов обязательна. Оживление слайдера необязательно, принцип оживления описан в 7 разделе.
  * Блок карты — достаточная реализация — обычное изображение.
  * Вёрстка модального окна обязательна (смотрите папку слоёв «Обратная связь»).
  * Карточка товара: поведение этого элемента при наведении на главной странице аналогичны поведению на странице каталога (смотрите в styleguide.psd).

__gllacy-catalog.psd:__
  * Логотип — это ссылка на главную страницу.
  * В хлебных крошках пункт «Главная» — это ссылка на главную страницу.
  * Фильтр: верстать с помощью формы, кнопка «Применить» отвечает за отправку формы.
  * Блок «Цена» — при наведении на любой из маркеров появляется указатель cursor: pointer, делать маркеры подвижными не обязательно, цена меняться не должна.
  * Количество товаров может быть любым, оно не должно ломать страницу.
  * Если пользователь добавил что-то в корзину, соответствующий пункт в шапке страницы меняет цвет фона на белый. При наведении на этот пункт появляется форма с товарами (смотрите папку слоёв «Ховеры»).
### 3. Дополнительные требования

__gllacy-index.psd:__
  * Карусель под шапкой страницы: оживление слайдера. Cмена слайдов мгновенная, без промежуточных переходов. При смене слайдов происходит смена фонового цвета на  всей странице (смотрите папку слоёв «Фон» в gllacy-index.psd).
  * Блок карты — реализация по желанию — интерактивная карта, которая также масштабируется на 100% ширины вьюпорта, на карте размещён маркер. Допустимо  использовать как стандартный, так и кастомный маркер.
  * По клику на кнопку «форма обратной связи» возникает модальное окно с формой отправки сообщения (смотрите папку слоёв «Ховеры» в gllacy-index.psd), окно  позиционируется относительно вьюпорта, а не страницы.

__gllacy-catalog.psd:__
  * Фильтр: по нажатию кнопки «Применить» осуществляется отправка формы.
