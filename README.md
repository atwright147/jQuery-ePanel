jQuery-ePanel
=============

A simple expandable and collapsible panel jQuery plugin.

## Installation

Include script *after* the jQuery library:

    <script type="text/javascript" src="/path/to/jquery.epanel.js"></script>

Optionally, you can include the jQuery Easing Library OR jQuery UI (to allow you to use different easing styles):

    <script type="text/javascript" src="path/to/jquery.easing.min.js"></script>

## Usage

Create appropriate HTML:

    <div class="js-panel open" id="demo1">
        <div class="header">
            Title of Panel
        </div>
        <div class="content">
            Lorem ipsum dolor sit amet.
            <ul>
                <li>item#1</li>
                <li>item#2</li>
                <li>item#3</li>
            </ul>
        </div>
    </div>

Create a jQuery selector to select the markup:

    $('.js-panel').epanel();

## Options

### Open CSS Class

    open_class: 'open'

Define the CSS class to apply to open panels. This also changes which CSS class the plugin looks for to leave panels open when initialising. Default: `open`.

### Closed CSS Class

    closed_class: 'closed'

See open_class above. Default: `closed`.

### Mouse Cursor for Headers

    cursor: 'pointer'

Define the CSS cursor to show when hovering over each panel header. Default: `pointer`.

### Animation Speed (for opening and closing)

    speed: 'fast'
    speed: 'slow'
    speed: 1000

Define the speed at which panels should open and close. Default: `fast` (internal jQuery alias for 800ms).

### Easing

    easing: 'linear'

Define the easing style to use when opening and closing panels. Set to any valid easing name from the jQuery UI or Easing Library. You must also include the appropriate easing library *before* Default: `false`.

## Development

- Source hosted at [GitHub](https://github.com/atwright147/jquery-epanel)
- Report issues, questions, feature requests on [GitHub Issues](https://github.com/atwright147/jquery-epanel/issues)

Pull requests are very welcome! Make sure your patches are well tested. Please create a topic branch for every separate change you make.

## Authors

[Andy Wright](https://github.com/atwright147)

*This readme is based on the readme by carhartl for his jquery-cookie plugin*

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/aef349fd427308cee9412530a3408977 "githalytics.com")](http://githalytics.com/atwright147/jQuery-ePanel)