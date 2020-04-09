## Marriott Library Default OmekaS Theme

OmekaS is a web publication system for universities, galleries, libraries, archives, and museums. It consists of a local network of independently curated exhibits sharing a collaboratively built pool of items, media, and their metadata.

See the [user manual](https://omeka.org/s/docs/user-manual) for more information.


## Installing this Theme

In order to appear in the Themes tab for sites, themes must be manually added to the themes folder of the installation, using an FTP program or an ssh connection.

To add this theme to the site using FTP

* Download the zipped theme to your computer.
* Open your FTP client, log on to the server that houses the Omeka S install and navigate to the /themes folder (this should be located in the main folder of the install).
* Upload the zipped theme to the /themes folder
* Unzip the module

## Theme Usage

### Modifying Theme Styles

This theme uses custom styles found in `marriott-default.css` from `asset/css/`

* Modify theme styles in `marriott-default.css` from `asset/css/`
* Add your own custom stylesheets by appendStylesheet in the main `layout.phtml` from `view/layout/` and create a new css file in `asset/css/`

### Changing the top header logo and logo link

* Add your logo to the themes `images/` folder.
* Open `layout.phtml` from `view/layout/`
* Update the logo file name, alt, and link inside `<!-- Header Branding -->`

### Using the Masonry Item Layout

* Use example html code `exhibit-masonryLayout.html` from `examples/`

## Libraries

Omeka uses the following libraries, among others:

* [Zend Framework 3](http://framework.zend.com/)
* [Doctrine 2](http://www.doctrine-project.org/)
* [EasyRdf](http://www.easyrdf.org/)
* [PHPUnit](https://phpunit.de/)
* [jQuery](http://jquery.com/)

## Coding Standards

Omeka development adheres to the [Zend Framework 2 Coding Standards](https://zf2-docs.readthedocs.org/en/latest/ref/coding.standard.html)
and uses the [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) branching model.
