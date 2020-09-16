<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Don't Filter Me!</title>
    <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="dist/css/main.css?917" />
  </head>
  <body>
    <div class="wrapper">
      <div class="c-step is-active" data-step>
        <h3 class="c-step__label" data-step-label>
          <span data-step-label>What will you upload?</span>
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
                <span class="c-form-option__label">Visual</span>
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
                <span class="c-form-option__label">Audio</span>
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
                <span class="c-form-option__label">Text</span>
              </label>
            </div>
          </div>
          <div class="c-step__info">
            <p>
              Based on your choices we will generate a text for you describing your "intention". You can paste the text close to your uploaded file on your favorite platform. In this step we ask you to select the media type you are about to upload. Tip: you can always go back to previous steps if you need to make changes. 
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
          <span data-step-label>Are you willing to share contact details?</span>
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
                <span class="c-form-option__label">Anonymous</span>
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
                <span class="c-form-option__label">Basic</span>
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
              If you choose "anonymous" you can add a pseudonym at the end. Choose  "basic" and only add your name, email and/or website. Choose "verified" if you want to link to an online source already showing your verified identity.
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
          <span data-step-label>What are people allowed to do with your work?</span>
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
                <span class="c-form-option__label">Share</span>
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
                <span class="c-form-option__label">Share and adapt</span>
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
                <span class="c-form-option__label">Share, even commercially</span>
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
                  >Share, adapt, even commercially</span
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
                  >Nothing, without my written consent</span
                >
              </label>
            </div>
          </div>
          <div class="c-step__info">
            <p>
              This part focusses on your intention. What feels good? People sharing your creativity? Is it ok if someone edits or builds upon your work? Does is still feel good if some of them commercially benefit from your work without paying you?
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
          Result
          <span class="c-step__info-toggle"
            ><?= file_get_contents('dist/images/icons/error_outline.svg'); ?></span
          >
        </h3>
        <div class="c-step__content">
          <div class="c-form-element">
            <label for="language"
              >Language of your declaration of intent</label
            >
            <select name="language" id="language">
              <option value="nl">Dutch</option>
              <option value="en" selected>English</option>
            </select>
          </div>
          <div class="c-form-element" data-contact-name>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div class="c-form-element" data-contact-pseudonym>
            <label for="pseudonym">Pseudonym</label>
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
              >You can tweak / copy this declaration of intent to your clipboard. Paste the text close to the file you upload on your favorite platform.</strong
            >
          </p>
          <div class="c-step__info">
            <p>
              Choose your preferred language and add your contact details. Your personal declaration of intent will show up in the dark area below. Hit the "Copy declaration of intent" button. This will copy the text to your clipboard. That's where this tool stops but your online journey continues. Upload your file to your favorite platform and copy the text from your clipboard into one of the provided meta data / comment sections next to your file.
            </p>
          </div>
        </div>
        <div class="c-step__footer">
          <p data-declaration-of-intent>
            This video is copyright protected. I am the sole owner. If you want to share, build upon or commercially use my work please contact me first. My contact details: Hessel, www.73553H.com
          </p>
          <p>
            <a href="javascript:void(0);" data-copy
              ><?= file_get_contents('dist/images/icons/content_copy.svg'); ?>
              <strong>Copy declaration of intent</strong></a
            >
          </p>
          <p class="text-center">
            <a href="/" class="c-button">upload file</a>
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

    <script src="dist/js/main.js?917"></script>
  </body>
</html>
