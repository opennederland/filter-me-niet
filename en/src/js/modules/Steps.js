import translations from "../../../translations";
import copy from "copy-to-clipboard";

export default class Steps {
  constructor() {
    this.isDone = [];
    this.contactName = "";
    this.contactPseudonym = "";
    this.contactContact = "";
    this.contactVerifiedUrl = "";

    this.timeout = null;

    this.init();
    this.setEvents();
  }

  init() {
    this.steps = document.querySelectorAll("[data-step]");
  }

  setEvents() {
    this.steps.forEach((step, idx) => {
      if (idx < this.steps.length - 1) {
        step.querySelectorAll(".c-form-option").forEach((option) => {
          const label = option.querySelector("label");
          const isChecked = option.querySelector("input");

          label.addEventListener("click", (e) => {
            e.stopPropagation();
            if (isChecked) {
              this.setDone(idx);

              this.setActive(this.isDone.length);
            }
          });
        });

        step.addEventListener("change", (e) => {
          this.setDone(idx);
          this.setValue(step, e);

          this.setActive(this.isDone.length);
        });
      }

      step.querySelector(".c-step__label").addEventListener(
        "click",
        (e) => {
          if (step.classList.contains("is-done")) {
            this.setActive(idx);
          }
        },
        false
      );

      const infoToggle = step.querySelector(".c-step__info-toggle");
      if (infoToggle) {
        infoToggle.addEventListener(
          "click",
          () => {
            step.classList.toggle("show-info");
          },
          false
        );
      }

      document
        .querySelector('select[name="language"]')
        .addEventListener("change", (e) => {
          this.createDeclarationOfIntent();
        });
    });

    document.querySelector("[data-copy]").addEventListener("click", (e) => {
      e.preventDefault();
      this.copyDeclarationOfIntent();
    });

    document
      .querySelector("[data-contact-name]")
      .addEventListener("input", (e) => {
        this.contactName = e.target.value;
        this.createDeclarationOfIntent();
      });

    document
      .querySelector("[data-contact-pseudonym]")
      .addEventListener("input", (e) => {
        this.contactPseudonym = e.target.value;
        this.createDeclarationOfIntent();
      });

    document
      .querySelector("[data-contact-contact]")
      .addEventListener("input", (e) => {
        this.contactContact = e.target.value;
        this.createDeclarationOfIntent();
      });

    document
      .querySelector("[data-contact-verified]")
      .addEventListener("input", (e) => {
        this.contactVerifiedUrl = e.target.value;
        this.createDeclarationOfIntent();
      });
  }

  setActive(idx) {
    const step = this.steps[idx];

    if (step) {
      this.steps.forEach((step, index) => {
        if (idx !== index) {
          step.classList.remove("is-active");
          if (this.isDone.includes(index)) {
            step.classList.add("is-done");
          }
        }
      });

      step.classList.remove("is-done");
      step.classList.add("is-active");
    }
  }

  setDone(idx) {
    const step = this.steps[idx];

    if (step) {
      step.classList.remove("is-active");
      step.classList.add("is-done");

      if (!this.isDone.includes(idx)) {
        this.isDone.push(idx);
      }
    }
  }

  setValue(step, e) {
    const name = e.target.name,
      value = e.target.value;

    const uploadTypeLabels = {
      image_video: "visual work",
      audio: "audio",
      text_code: "text",
    };

    const personalDataLabels = {
      anonymous: "Anonymous",
      basic: "Basic",
      verified: "Verified",
    };

    const labels = {
      upload_type: "I upload <strong>[value]</strong>",
      personal_data: "I send <strong>[value]</strong> contact details",
    };

    if (step.querySelector("[data-step-value]") && name in labels) {
      if (name === "upload_type") {
        step.querySelector("[data-step-value]").innerHTML = labels[
          name
        ].replace("[value]", uploadTypeLabels[value]);
      } else if (name === "personal_data") {
        step.querySelector("[data-step-value]").innerHTML = labels[
          name
        ].replace("[value]", personalDataLabels[value]);
      } else {
        step.querySelector("[data-step-value]").innerHTML = labels[
          name
        ].replace("[value]", value);
      }
    }

    if (step.querySelector("[data-step-value]") && name === "conditions") {
      if (value === "share") {
        step.querySelector("[data-step-value]").innerHTML =
          "You can <strong>share</strong>";
      } else if (value === "share_edit") {
        step.querySelector("[data-step-value]").innerHTML =
          "You can <strong>share</strong> and <strong>edit</strong>";
      } else if (value === "share_commercial") {
        step.querySelector("[data-step-value]").innerHTML =
          "You can <strong>share</strong> even for <strong>commercial</strong> use.";
      } else if (value === "share_edit_commercial") {
        step.querySelector("[data-step-value]").innerHTML =
          "You can <strong>share</strong>, <strong>edit</strong> even for <strong>commercial</strong> use.";
      } else if (value === "none") {
        step.querySelector("[data-step-value]").innerHTML =
          "You are <strong>not allowed</strong> to do anything without my written consent";
      }
    }

    this.setContactFields(step, e);
    this.createDeclarationOfIntent();
  }

  setContactFields(step, e) {
    const name = e.target.name,
      value = e.target.value;

    const nameField = document.querySelector("[data-contact-name]"),
      pseudonymField = document.querySelector("[data-contact-pseudonym]"),
      contactField = document.querySelector("[data-contact-contact]"),
      verifiedField = document.querySelector("[data-contact-verified]");

    if (name === "personal_data") {
      if (value === "anonymous") {
        nameField.classList.add("is-hidden");
        pseudonymField.classList.remove("is-hidden");
        contactField.classList.remove("is-hidden");
        verifiedField.classList.add("is-hidden");
      }

      if (value === "basic") {
        nameField.classList.remove("is-hidden");
        pseudonymField.classList.add("is-hidden");
        contactField.classList.remove("is-hidden");
        verifiedField.classList.add("is-hidden");
      }

      if (value === "verified") {
        nameField.classList.remove("is-hidden");
        pseudonymField.classList.add("is-hidden");
        contactField.classList.remove("is-hidden");
        verifiedField.classList.remove("is-hidden");
      }
    }
  }

  createDeclarationOfIntent() {
    this.declarationOfIntent = "";

    const language =
      document.querySelector('select[name="language"]').value || "en";

    const uploadType = document.querySelector(
      'input[name="upload_type"]:checked'
    );
    const personalData = document.querySelector(
      'input[name="personal_data"]:checked'
    );
    const conditions = document.querySelector(
      'input[name="conditions"]:checked'
    );

    if (uploadType) {
      if (translations.upload_type[uploadType.value][language]) {
        this.declarationOfIntent +=
          translations.upload_type[uploadType.value][language];
      }
    }

    if (conditions) {
      if (translations.conditions[conditions.value][language]) {
        this.declarationOfIntent += ` ${
          translations.conditions[conditions.value][language]
        }`;
      }
    }

    if (personalData) {
      if (personalData.value === "basic") {
        this.declarationOfIntent += ` Contact: ${[
          this.contactName,
          this.contactContact,
        ]
          .filter(Boolean)
          .join(", ")}`;
      } else if (personalData.value === "verified") {
        this.declarationOfIntent += ` Contact: ${[
          this.contactName,
          this.contactContact,
          this.contactVerifiedUrl,
        ]
          .filter(Boolean)
          .join(", ")}`;
      } else if (personalData.value === "anonymous") {
        this.declarationOfIntent += ` Contact: ${[
          this.contactPseudonym,
          this.contactContact,
        ]
          .filter(Boolean)
          .join(", ")}`;
      }
    }

    // Set to DOM
    document.querySelector(
      "[data-declaration-of-intent]"
    ).innerText = this.declarationOfIntent;
  }

  copyDeclarationOfIntent() {
    const labels = {
      default: "Copy declaration of intent",
      copied: "Copied to clipboard!",
    };

    const copyLink = document.querySelector("[data-copy] strong");

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    copy(this.declarationOfIntent);
    copyLink.innerText = labels.copied;
    this.timeout = setTimeout(() => {
      copyLink.innerText = labels.default;
    }, 1500);
  }
}
