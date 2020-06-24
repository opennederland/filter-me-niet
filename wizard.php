<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Filter me niet</title>
    <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="dist/css/main.css" />
  </head>
  <body>
    <div class="wrapper">
      <div class="c-step is-active" data-step>
        <h3 class="c-step__label" data-step-label>
          <span data-step-label>Wat ga je uploaden?</span>
          <span data-step-value></span>
          <span class="c-step__info-toggle"
            ><?= file_get_contents('dist/images/icons/error_outline.svg'); ?></span
          >
        </h3>
        <div class="c-step__content">
          <div class="c-grid">
            <div class="c-form-option">
              <input
                type="radio"
                name="upload_type"
                id="upload_type_image"
                value="image_video"
              />
              <label for="upload_type_image">
                <div class="c-form-option__icon">
                  <?= file_get_contents('dist/images/icons/video.svg'); ?>
                </div>
                <span class="c-form-option__label">Beeld</span>
              </label>
            </div>
            <div class="c-form-option">
              <input
                type="radio"
                name="upload_type"
                id="upload_type_sound"
                value="audio"
              />
              <label for="upload_type_sound">
                <div class="c-form-option__icon">
                  <?= file_get_contents('dist/images/icons/volume-up.svg'); ?>
                </div>
                <span class="c-form-option__label">Geluid</span>
              </label>
            </div>
            <div class="c-form-option">
              <input
                type="radio"
                name="upload_type"
                id="upload_type_text"
                value="text_code"
              />
              <label for="upload_type_text">
                <div class="c-form-option__icon">
                  <?= file_get_contents('dist/images/icons/textsms.svg'); ?>
                </div>
                <span class="c-form-option__label">Tekst</span>
              </label>
            </div>
          </div>
          <div class="c-step__info">
            <p>
              We genereren op basis van jouw keuzes een tekst die je bij het
              bestand dat je gaat uploaden kan plakken. Je kan altijd terug naar
              een vorige stap om aanpassingen te maken. Kies nu eerst het type
              bestand dat je wil gaan uploaden.
            </p>
          </div>
        </div>
        <div class="c-step__identifier">
          <span class="c-step__identifier__index">1</span>
          <span class="c-step__identifier__check">
            <?= file_get_contents('dist/images/icons/check.svg'); ?>
          </span>
        </div>
      </div>
      <div class="c-step" data-step>
        <h3 class="c-step__label">
          <span data-step-label>Wil je persoonsgegevens meesturen?</span>
          <span data-step-value></span>
          <span class="c-step__info-toggle"
            ><?= file_get_contents('dist/images/icons/error_outline.svg'); ?></span
          >
        </h3>
        <div class="c-step__content">
          <div class="c-grid">
            <div class="c-form-option">
              <input
                type="radio"
                name="personal_data"
                id="personal_data_anonymous"
                value="anonymous"
              />
              <label for="personal_data_anonymous">
                <div class="c-form-option__icon">
                  <?= file_get_contents('dist/images/icons/user-secret.svg'); ?>
                </div>
                <span class="c-form-option__label">Anoniem</span>
              </label>
            </div>
            <div class="c-form-option">
              <input
                type="radio"
                name="personal_data"
                id="personal_data_basic"
                value="basic"
              />
              <label for="personal_data_basic">
                <div class="c-form-option__icon">
                  <?= file_get_contents('dist/images/icons/user.svg'); ?>
                </div>
                <span class="c-form-option__label">Basis</span>
              </label>
            </div>
            <div class="c-form-option">
              <input
                type="radio"
                name="personal_data"
                id="personal_data_verified"
                value="verified"
              />
              <label for="personal_data_verified">
                <div class="c-form-option__icon">
                  <?= file_get_contents('dist/images/icons/check-circle.svg'); ?>
                </div>
                <span class="c-form-option__label">Verified</span>
              </label>
            </div>
          </div>
          <div class="c-step__info">
            <p>
              Kies je voor “anoniem” dan kun je later een pseudoniem invoeren.
              “Basis” vraagt om je naam en e-mail of webadres. Kies je voor
              “verified” dan kun je linken naar een online bron die jouw
              identiteit heeft geverifieerd.
            </p>
          </div>
        </div>
        <div class="c-step__identifier">
          <span class="c-step__identifier__index">2</span>
          <span class="c-step__identifier__check">
            <?= file_get_contents('dist/images/icons/check.svg'); ?>
          </span>
        </div>
      </div>
      <div class="c-step" data-step>
        <h3 class="c-step__label">
          <span data-step-label>En wat mag iemand met jouw werk?</span>
          <span data-step-value></span>
          <span class="c-step__info-toggle"
            ><?= file_get_contents('dist/images/icons/error_outline.svg'); ?></span
          >
        </h3>
        <div class="c-step__content">
          <div class="c-grid c-grid--full-width">
            <div class="c-form-option">
              <input
                type="radio"
                name="conditions"
                value="share"
                id="conditions_share"
              />
              <label for="conditions_share">
                <span class="c-form-option__label">Delen</span>
              </label>
            </div>
            <div class="c-form-option">
              <input
                type="radio"
                name="conditions"
                value="share_edit"
                id="conditions_share_edit"
              />
              <label for="conditions_share_edit">
                <span class="c-form-option__label">Delen en bewerken</span>
              </label>
            </div>
            <div class="c-form-option">
              <input
                type="radio"
                name="conditions"
                value="share_commercial"
                id="conditions_share_commercial"
              />
              <label for="conditions_share_commercial">
                <span class="c-form-option__label">Delen en commercieel</span>
              </label>
            </div>
            <div class="c-form-option">
              <input
                type="radio"
                name="conditions"
                value="share_edit_commercial"
                id="conditions_share_edit_commercial"
              />
              <label for="conditions_share_edit_commercial">
                <span class="c-form-option__label"
                  >Delen, bewerken en commercieel</span
                >
              </label>
            </div>
            <hr />
            <div class="c-form-option">
              <input
                type="radio"
                name="conditions"
                value="none"
                id="conditions_none"
              />
              <label for="conditions_none">
                <span class="c-form-option__label"
                  >Niets zonder mijn schriftelijke toestemming</span
                >
              </label>
            </div>
          </div>
          <div class="c-step__info">
            <p>
              Het gaat hier om jouw intentie. Waar voel jij je prettig bij? Mag
              iemand je werk met anderen delen? Of zelfs bewerken en commercieel
              hergebruiken? Jouw keuze genereert een standaard tekst die je bij
              je bestand kan plaatsen.
            </p>
          </div>
        </div>
        <div class="c-step__identifier">
          <span class="c-step__identifier__index">3</span>
          <span class="c-step__identifier__check">
            <?= file_get_contents('dist/images/icons/check.svg'); ?>
          </span>
        </div>
      </div>
      <div class="c-step" data-step>
        <h3 class="c-step__label">
          Resultaat
          <span class="c-step__info-toggle"
            ><?= file_get_contents('dist/images/icons/error_outline.svg'); ?></span
          >
        </h3>
        <div class="c-step__content">
          <div class="c-form-element">
            <label for="language"
              >In welke taal wil je deze intentieverklaring?</label
            >
            <select name="language" id="language">
              <option value="nl" selected>Nederlands</option>
              <option value="en">Engels</option>
            </select>
          </div>
          <div class="c-form-element" data-contact-name>
            <label for="name">Naam</label>
            <input type="text" name="name" id="name" />
          </div>
          <div class="c-form-element" data-contact-pseudonym>
            <label for="pseudonym">Pseudoniem</label>
            <input type="text" name="pseudonym" id="pseudonym" />
          </div>
          <div class="c-form-element" data-contact-contact>
            <label for="contact">Contact</label>
            <input type="text" name="contact" id="contact" />
          </div>
          <div class="c-form-element" data-contact-verified>
            <label for="verified_url">Verified URL</label>
            <input type="text" name="verified_url" id="verified_url" />
          </div>
          <p>
            <strong
              >Bewerk, knip en plak deze intentieverklaring bij het bestand dat
              je gaat uploaden</strong
            >
          </p>
          <div class="c-step__info">
            <p>
              Je kunt de taal kiezen en je contactgegevens toevoegen. Jouw
              persoonlijke intentieverklaring vind je in het zwarte vlak terug.
              Klik vervolgens op “kopieer intentieverklaring” en de tekst staat
              klaar op je klembord. Tijdens het uploaden plak je de tekst in een
              relevant informatieveld bij je bestand.
            </p>
          </div>
        </div>
        <div class="c-step__footer">
          <p data-declaration-of-intent>
            Op deze foto/video rusten auteurs- en andere rechten waar ik
            eigenaar van ben. Interesse om dit of andere werken van mij te
            gebruiken? Contact: Hessel van Oorschot, www.73553H.com
          </p>
          <p>
            <a href="javascript:void(0);" data-copy
              ><?= file_get_contents('dist/images/icons/content_copy.svg'); ?>
              <strong>Kopieer intentieverklaring</strong></a
            >
          </p>
          <p class="text-center">
            <a href="/" class="c-button">upload bestand</a>
          </p>
        </div>
        <div class="c-step__identifier">
          <span class="c-step__identifier__index">
            <?= file_get_contents('dist/images/icons/check.svg'); ?>
          </span>
          <span class="c-step__identifier__check">
            <?= file_get_contents('dist/images/icons/check.svg'); ?>
          </span>
        </div>
      </div>
    </div>

    <script src="dist/js/main.js"></script>
  </body>
</html>
