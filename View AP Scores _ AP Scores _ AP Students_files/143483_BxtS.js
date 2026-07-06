(function(self, ns){
    var GENERIC_BUNDLE_URL = "https://appc.collegeboard.org/generic/main/7.24.1/appcues.main.337650133924744b50ef043c4a91c308ad019cdb.js";
    var ACCOUNT_DETAILS = {"API_HOSTNAME":"api.appcues.net","GENERIC_BUNDLE_DOMAIN":"https://appc.collegeboard.org","GENERIC_BUNDLE_PATH":"/generic/main/7.24.1/appcues.main.337650133924744b50ef043c4a91c308ad019cdb.js","RELEASE_ID":"337650133924744b50ef043c4a91c308ad019cdb","VERSION":"7.24.1","account":{"buffer":0,"clickstreamEnabled":false,"entitlements":{"enableCTTEventIntegrations":false},"gates":{"enableCTTEventIntegrations":false,"enableClientSideEventIntegrations":false,"responseFormatV2Enabled":true},"isTrial":false,"isTrialExpired":true,"skipAutoProperties":false,"stripQueryParams":null,"stripePlanId":"105744.52-enterprise-yearly"},"accountId":"143483","custom_events":[{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Clicked Save College","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".cs-search-results-list-display .cs-college-card-outer-container:nth-of-type(1) .cs-add-to-college-button","text_filter":"Save College"}}],"updatedAt":null,"updatedBy":null,"urls":["https://bigfuture.collegeboard.org/college-search*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Clicked Submit AP Awareness MAR-30372","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[type=\"submit\"]"}}],"updatedAt":null,"updatedBy":null,"urls":["https://go.collegeboard.org/ap-course-interest-students","https://go.collegeboard.org/ap-course-interest-students?"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Proteus | Download Multi-template PDF","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[aria-hidden] div:nth-child(7) .cb-btn-sm","text_filter":"Single PDF"}}],"updatedAt":null,"updatedBy":null,"urls":["https://proteus-staging.itemcloud-proteus-prod.collegeboard.org/templateCluster/*/items"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Proteus | Download Single-template PDF","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[aria-hidden] .cb-modal-content div:nth-child(6)"}}],"updatedAt":null,"updatedBy":null,"urls":["https://proteus-staging.itemcloud-proteus-prod.collegeboard.org/templateCluster/*/items"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:SSOR - Complete Order Button Final","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".cb-btn-primary.cb-black1-color.cb-black1-border"}}],"updatedAt":null,"updatedBy":null,"urls":["https://ordering.collegeboard.org/confirmation"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:SSOR - Complete Order Modal Button","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".radix-c-bQzyIt-iktcCnB-css .radix-c-bQzyIt-iIEeij-css .cb-black1-border"}}],"updatedAt":null,"updatedBy":null,"urls":["https://ordering.collegeboard.org/calculator"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:BFPM Publish Button Click","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".bottom-bar-content .cb-btn-primary"}}],"updatedAt":null,"updatedBy":null,"urls":["https://bigfuturemanage.collegeboard.org/profile-information"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Clicked Join Parent Email List","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-kiwi-feature-view]"}}],"updatedAt":null,"updatedBy":null,"urls":["https://bigfuture.collegeboard.org/bigfuture-parents","https://bigfuture.collegeboard.org/parents/afford","https://bigfuture.collegeboard.org/communities-events/for-parents"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:BF Parent Video View","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".cb-base-color .cb-band-panel-components > div:nth-of-type(1) > div:nth-of-type(1) [class=\"cb-video-effect cb-black1-bg cb-opacity-7\"] "}}],"updatedAt":null,"updatedBy":null,"urls":["https://bigfuture.collegeboard.org/communities-events/for-parents"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Learn More TESTING","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".cb-band-panel-footer .cb-btn-black "}}],"updatedAt":null,"updatedBy":null,"urls":["https://bigfuture.collegeboard.org/communities-events/for-parents"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Join Parent Email List","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-kiwi-feature-view] "}}],"updatedAt":null,"updatedBy":null,"urls":["https://bigfuture.collegeboard.org/parents/afford"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Clicked Sign Up Now MAR-25194","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".cb-band-panel.cb-bf-chartreuse-bg .cb-btn-black "}}],"updatedAt":null,"updatedBy":null,"urls":["https://bigfuture.collegeboard.org/communities-events/for-parents"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Clicked Get Parent Emails","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-kiwi-feature-view] "}}],"updatedAt":null,"updatedBy":null,"urls":["https://bigfuture.collegeboard.org/communities-events/for-parents"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Clicked Get a Reminder Card","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-cbtrack-tnt=\"sat-content-pg-get-reminders\"] "}}],"updatedAt":null,"updatedBy":null,"urls":["https://satsuite.collegeboard.org/dates/september-13-2025-sat-test-date?at_preview_token=0e7wpUAQ_eyadlLKEEKzmZxxtob9zHZjR8TGyw9Cl3g&at_preview_index=1_1&at_preview_listed_activities_only=true"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Clicked Get a Reminder","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[aria-label=\"Get a Reminder\"] ","text_filter":"Get a Reminder"}}],"updatedAt":null,"updatedBy":null,"urls":["https://satsuite.collegeboard.org/*","https://bigfuture.collegeboard.org/*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:NRP Dwnld Cert Button","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"#form-button-bf-profile-app-nrp-2025-awarded-generic-status-section-cta"}}],"updatedAt":null,"updatedBy":null,"urls":["https://bigfuture.collegeboard.org/profile"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Click to open Search Dashboard","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-cbtrack-comp] div:nth-of-type(2) .container [role] span "}}],"updatedAt":null,"updatedBy":null,"urls":["https://collegeboardsearch.collegeboard.org/search-students"]}],"defaultAppId":"2fa53a88-7443-4c47-be41-441b311fd06d","integrations":{},"styling":{"globalBeaconColor":"#ff8e00","globalBeaconStyle":"hotspot","globalHotspotAnimation":"hotspot-animation-pulse","globalHotspotStyling":"","globalStyling":"\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i');\n\n\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i');\n\n\n.appcues-actions-right > .appcues-button.appcues-button-success, .appcues-progress-bar-success {\n    background-color: #324dc7;\n}\n.appcues-actions-right > .appcues-button.appcues-button-success:hover {\n    background-color: #4b63d2;\n}\n\n\n.appcues-actions-right > .appcues-button.appcues-button-success:hover {\n    background-color: #324dc7 !important;\n}\n\n\n.appcues-actions-right .appcues-button, .appcues-actions-left .appcues-button {\n    font-size: 14px;\n}\n\n\n.appcues-actions-right .appcues-button {\n    color: #ffffff;\n}\n\n\n.appcues-actions-right .appcues-button:hover {\n    color: #ffffff !important;\n}\n\n\n.appcues-actions-left >  .appcues-button {\n    background-color: #ffffff;\n}\n.appcues-actions-left > .appcues-button:hover {\n    background-color: #ffffff;\n}\n\n\n.appcues-actions-left > .appcues-button:hover {\n    background-color: #f7f7f7 !important;\n}\n\n\n.appcues-actions-left .appcues-button {\n    color: #555555;\n}\n\n\n.appcues-actions-left .appcues-button:hover {\n    color: #555555 !important;\n}\n\n\n.appcues-actions-right .appcues-button, .appcues-actions-left .appcues-button {\n    border-radius: 3px;\n}\n\n\nbody, appcues cue, .tooltip .content {\n    font-family: 'Open Sans', sans-serif;\n}\n\n\nbody h1, body h2, body h3, body h4, body h5,\nappcues cue h1, appcues cue h2, appcues cue h3, appcues cue h4, appcues cue h5,\n.tooltip .content h1, .tooltip .content h2, .tooltip .content h3, .tooltip .content h4, .tooltip .content h5 {\n    font-family: 'Open Sans', sans-serif;\n}\n\n\n  body, appcues cue, .tooltip .content {\n      color: #808080;\n  }\n  \n\n.tooltip .content .panel {\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.tooltip .content .panel:before, .tooltip .content .panel:after {\n  height: 13px;\n  width: 13px;\n  background-color: #ffffff;\n  border-radius: 2px;\n  border: none;\n  transform: rotate(45deg);\n}\n\n.tooltip .content .panel:after {\n  position: absolute;\n  content: \"\";\n  z-index: -1;\n}\n\n.tooltip .content.content-top .panel:before, .tooltip .content.content-top .panel:after {\n  margin-left: -7px;\n}\n\n.tooltip .content.content-top .panel:before,\n.tooltip .content.content-top .panel:after,\n.tooltip .content.content-top-left .panel:before,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-top-right .panel:before,\n.tooltip .content.content-top-right .panel:after {\n  margin-top: -6px;\n}\n\n.tooltip .content.content-bottom .panel:before, .tooltip .content.content-bottom .panel:after {\n  margin-left: -7px;\n}\n\n.tooltip .content.content-bottom .panel:before,\n.tooltip .content.content-bottom .panel:after,\n.tooltip .content.content-bottom-left .panel:before,\n.tooltip .content.content-bottom-left .panel:after,\n.tooltip .content.content-bottom-right .panel:before,\n.tooltip .content.content-bottom-right .panel:after {\n  margin-bottom: -6px;\n}\n\n.tooltip .content.content-right .panel:before, .tooltip .content.content-right .panel:after {\n  margin-top: -7px;\n}\n\n.tooltip .content.content-right .panel:before,\n.tooltip .content.content-right .panel:after,\n.tooltip .content.content-right-top .panel:before,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-right-bottom .panel:before,\n.tooltip .content.content-right-bottom .panel:after {\n  margin-right: -6px;\n}\n\n.tooltip .content.content-left .panel:before, .tooltip .content.content-left .panel:after {\n  margin-top: -7px;\n}\n\n.tooltip .content.content-left .panel:before,\n.tooltip .content.content-left .panel:after,\n.tooltip .content.content-left-top .panel:before,\n.tooltip .content.content-left-top .panel:after,\n.tooltip .content.content-left-bottom .panel:before,\n.tooltip .content.content-left-bottom .panel:after {\n  margin-left: -6px;\n}\n\n.tooltip .content.content-top-left .panel:before,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-bottom-left .panel:before,\n.tooltip .content.content-bottom-left .panel:after {\n  right: 10px;\n}\n\n.tooltip .content.content-top-right.panel:before,\n.tooltip .content.content-top-right .panel:after,\n.tooltip .content.content-bottom-right .panel:before,\n.tooltip .content.content-bottom-right .panel:after {\n  left: 10px;\n}\n\n.tooltip .content.content-right-bottom .panel:before,\n.tooltip .content.content-right-bottom .panel:after,\n.tooltip .content.content-left-bottom .panel:before,\n.tooltip .content.content-left-bottom .panel:after {\n  top: 10px;\n}\n\n.tooltip .content.content-right-top.panel:before,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-left-top .panel:before,\n.tooltip .content.content-left-top .panel:after {\n  bottom: 10px;\n}\n\n.tooltip .content.content-top .panel:after {\n  left: 50%;\n}\n\n.tooltip .content.content-top .panel:after,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-top-right .panel:after {\n  top: 100%;\n}\n\n.tooltip .content.content-bottom .panel:after {\n  left: 50%;\n}\n\n.tooltip .content.content-bottom .panel:after,\n.tooltip .content.content-bottom-left .panel:after,\n.tooltip .content.content-bottom-right .panel:after {\n  bottom: 100%;\n}\n\n.tooltip .content.content-right .panel:after {\n  top: 50%;\n}\n\n.tooltip .content.content-right .panel:after,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-right-bottom .panel:after {\n  right: 100%;\n}\n\n.tooltip .content.content-left .panel:after {\n  top: 50%;\n}\n\n.tooltip .content.content-left .panel:after,\n.tooltip .content.content-left-top .panel:after,\n.tooltip .content.content-left-bottom .panel:after {\n  left: 100%;\n}\n\n\n.tooltip .content .panel {\n  color: #000000;\n}\n\n.tooltip h1, .tooltip h2, .tooltip h3, .tooltip h4, .tooltip h5 {\ncolor: #000000;\n}\n\n  .panel.panel-default {\n    margin-right: 3px;\n    margin-bottom: 2px;\n    border-radius: 3.5px;\n  }\n  \n\n  .panel.panel-default, .content .panel:after {\n    box-shadow: 1px 1px 2px hsla(0,0%,13%,.6);\n  }\n  \n\n      .appcues-backdrop[data-pattern-type=left], .appcues-backdrop[data-pattern-type=shorty], .appcues-backdrop[data-pattern-type=modal] {\n        background-color: #2a2a2a;\n      }\n      \n\n      .appcues-backdrop[data-pattern-type=left], .appcues-backdrop[data-pattern-type=shorty], .appcues-backdrop[data-pattern-type=modal] {\n        opacity: 0.75;\n      }\n      \n\nappcues cue {\n    background: #ffffff\n}\n\n\nappcues cue *, appcues cue {\n    color: #000000\n}\n\n/*\n\tIt's dangerous to go alone! Take this.\n\n\t(Not actually dangerous, but hopefully these selectors \n\twill help you make your flows look beautiful!)\n\n        \t   /|\n\t          / |\n\t         /  |\n\t        /   |\n\t       /    |\n\t      /     |\n\t      \\     |\n\t   /|  \\    |\n\t  / |   \\   |\n\t /  |    \\  |\n\t/___|     \\_| \n\n\tAPPCUES CSS SELECTORS\n*/\n\n/************************************/\n/* Appcues Base Presets */\n\nappcues .appcues-actions-left .appcues-button { padding-left: 18px; }\nappcues .appcues-actions-left .appcues-button:before { content: none; }\n\n/*** Adjust style of progress bar */\n\nappcues .appcues-progress { background-color: white; height: 7px; border: 0; }\nappcues .appcues-progress .appcues-progress-bar { transition:width 0.5s ease 0.07s; }\nappcues .appcues-progress .appcues-progress-bar:not([aria-valuenow='100']) { border-top-right-radius: 0; border-bottom-right-radius: 0; }\n\n/*** Adjust margins & padding */\nappcues cue { min-height: 100px !important; padding: 22px 54px 82px; }\nappcues cue .apc-hero { margin: -22px -54px 0; }\n/* Fix up Hero typography */\nappcues cue .apc-hero h2 { font-size: 18px; font-weight: bold; }\nappcues[data-pattern-type=modal] cue {\n    box-shadow: 0 0 18px rgba(0,0,0,0.25);\n}\n.tooltip .panel { padding: 9px 12px 10px; }\n\n/*** Adjust typography */\nappcues cue h1, .tooltip h1 { font-weight: 200; font-size: 32px; margin-top: 0.5em; -webkit-font-smoothing:antialiased; }\nappcues cue h2, .tooltip h2 { font-weight: 400; font-size: 24px; margin-top: 0.5em; -webkit-font-smoothing:antialiased; }\nappcues cue h3, .tooltip h3 { font-weight: 600; letter-spacing: -0.01em; font-size: 20px; -webkit-font-smoothing:antialiased; }\nappcues cue h4,h5 { letter-spacing: -0.01em; margin-top: 0.75em; -webkit-font-smoothing:antialiased; }\np, li {\n    line-height: 1.6em;\n}\n\n/*** Adjust links in content */\nappcues cue section a[data-step], appcues cue section a[href], .tooltip p a[data-step], .tooltip p a[href] {\n    color: #324dc7;\n}\nappcues cue section a[data-step]:hover, appcues cue section a[href]:hover, .tooltip p a[data-step]:hover, .tooltip p a[href]:hover {\n    color: #324dc7;\n    text-decoration: underline; /* a18y */\n}\n\n/*** Adjust skip X */\nappcues .appcues-skip a { background: #; right: 6px; font-size: 28px; }\n.tooltip .panel .appcues-skip { color: #ccc; }\n\n/* End Appcues Base */\n/************************************/\n\n/*___Buttons and Links___*/\n.appcues-actions-right {\n\t/*[The section of the button row which hold the 'Next' or righthand side button.]*/\n}\n\n.tooltip .content .panel .panel-content-actions .appcues-actions-right {\n\t/*[Full selector to edit .appcues-actions-right in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-right {\n\t/*[Full selector to edit .appcues-actions-right in modals/slideouts]*/\n}\n\n\n.appcues-actions-left {\n\t/*[The section of the button row which hold the 'Prev' or lefthand side button.]*/\n}\n\n.tooltip .content .panel .panel-content-actions .appcues-actions-left {\n\t/*[Full selector to edit .appcues-actions-left in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-left {\n\t/*[Full selector to edit .appcues-actions-left in modals/slideouts]*/\n}\n\n\n.appcues-button {\n\t/*[Generic selector for any button.]*/\n}\n\n\n.appcues-button-success {\n\t/*[Selector for the 'Next' buttons (buttons which advance the step of the flow).]*/\n}\n\n.panel .panel-content-actions .appcues-actions-right > .appcues-button.appcues-button-success {\n\t/*[Full selector to edit .appcues-button-success in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-right > .appcues-button.appcues-button-success {\n\n\t/*[Full selector to edit .appcues-button-success in modals/slideouts]*/\n}\n\n.panel .panel-content-actions .appcues-skip {\n\t/*[Full selector to edit .appcues-skip in tooltips/hotspots] (close tooltip)*/\n}\n\nappcues .appcues-skip {\n\t/*[Full selector to edit .appcues-skip in modals/slideouts] (X button to close)*/\n}\n\n\nappcues[data-pattern-type=shorty] cue {\n\t/*[Selector for slideouts specifically]*/\n}\n\nappcues[data-pattern-type=modal] cue {\n\t/*[Selector for modals specifically]*/\n}\n\n\n/*___Modals and Slideouts___*/\n\nappcues {\t\n\t/*[This element wraps the entire modal or slideout.]*/\n}\n\nappcues cue {\n\t/*[This is where the main content for modals and slideouts lives.]*/\n}\n\nappcues .appcues-backdrop[data-pattern-type=modal] {\n\t/*[The backdrop (darkened background) for modals.]*/\n}\n\nappcues .appcues-progress {\n\t/*[The progress bar which indicates how far a user is in the flow]*/\n}\n\nappcues cue .apc-hero {\n\t/*[This is the selector for a hero image.]*/\n}\n\n\nappcues cue .appcues-actions {\n\t/*[The row where all the buttons are placed.]*/\n}\n\n\n\n/*___Hotspots and Tooltips___*/\n\n.tooltip .content .panel {\n\t/*[This is selector for the tooltip panel itself. The styles to the arrow can be accessed using the ::before selector (see below)]*/\n}\n\n.tooltip .content .panel .panel-content {\n\t/*[This is the selector for any content within the tooltip. This applies to both body text and the actions row.]*/\n}\n\n.tooltip .content .panel .panel-content-actions {\n\t/*[The specific container selection for the row with buttons/actions.]*/\n}\n\nappcues .appcues-skip > a {\n    background: none;\n    right: 6px;\n    font-size: 28px;\n    color: #324dc7; /* A medium gray -- update as needed */\n    opacity: .9;\n}\n.field-label label {font-size: 14px !important; text-align: center !important; line-height:1.6}\n\n\n    appcues .appcues-actions-right .appcues-button { padding-right: 18px; }\n    appcues .appcues-actions-right .appcues-button:after { content: none; }\n    appcues .appcues-actions-left .appcues-button { padding-left: 18px; }\n    appcues .appcues-actions-left .appcues-button:before { content: none; }","id":"27b0e414-ad97-4450-b0dd-2419cddaf541","theme":{"css":"\n:host {\n --typekit-id: ;\n--general-header-font: 'Open Sans', sans-serif;\n--general-header-font-url: https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i;\n--general-body-font: 'Open Sans', sans-serif;\n--general-body-font-url: https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i;\n--general-body-font-color: #808080;\n--button-font-size: 14px;\n--button-border-radius: 3px;\n--button-primary-background-color: #324dc7;\n--button-primary-border-color: transparent;\n--button-primary-border-width: 0px;\n--button-primary-color: #ffffff;\n--button-primary-hover-border-color: transparent;\n--button-primary-hover-border-width: 0px;\n--button-primary-hover-background-color: #324dc7;\n--button-primary-hover-color: #ffffff;\n--button-secondary-background-color: #ffffff;\n--button-secondary-border-color: #ffffff;\n--button-secondary-border-width: 0px;\n--button-secondary-color: #555555;\n--button-secondary-hover-border-color: transparent;\n--button-secondary-hover-border-width: 0px;\n--button-secondary-hover-background-color: #f7f7f7;\n--button-secondary-hover-color: #555555;\n--patterns-modal-color: #000000;\n--patterns-modal-background-color: #ffffff;\n--patterns-modal-backdrop-color: #2a2a2a;\n--patterns-modal-backdrop-opacity: 0.75;\n--patterns-tooltip-color: #000000;\n--patterns-tooltip-background-color: #ffffff;\n--patterns-tooltip-border-radius: 3.5px;\n--patterns-tooltip-shadow-distance-x: 1px;\n--patterns-tooltip-shadow-distance-y: 1px;\n--patterns-tooltip-shadow-blur: 2px;\n--patterns-tooltip-shadow-color: hsla(0,0%,13%,.6);\n--patterns-tooltip-beacon-color: #ff8e00;\n}","json":{"button":{"borderRadius":"3px","fontSize":"14px","primary":{"backgroundColor":"#324dc7","borderColor":"transparent","borderWidth":"0px","color":"#ffffff","hover":{"backgroundColor":"#324dc7","borderColor":"transparent","borderWidth":"0px","color":"#ffffff"}},"secondary":{"backgroundColor":"#ffffff","borderColor":"#ffffff","borderWidth":"0px","color":"#555555","hover":{"backgroundColor":"#f7f7f7","borderColor":"transparent","borderWidth":"0px","color":"#555555"}}},"general":{"bodyFont":"'Open Sans', sans-serif","bodyFontColor":"#808080","bodyFontUrl":"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i","headerFont":"'Open Sans', sans-serif","headerFontUrl":"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i"},"patterns":{"modal":{"backdropColor":"#2a2a2a","backdropOpacity":0.75,"backgroundColor":"#ffffff","color":"#000000"},"tooltip":{"backgroundColor":"#ffffff","beacon":{"color":"#ff8e00"},"borderRadius":"3.5px","color":"#000000","shadow":{"blur":"2px","color":"hsla(0,0%,13%,.6)","distance":{"x":"1px","y":"1px"}}}},"typekitId":""}},"typekitId":""}};
    var VERSION = ACCOUNT_DETAILS.VERSION;
    var RELEASE_ID = ACCOUNT_DETAILS.RELEASE_ID;
    var GENERIC_BUNDLE_DOMAIN = ACCOUNT_DETAILS.GENERIC_BUNDLE_DOMAIN;
    var accountId = ACCOUNT_DETAILS.accountId;
    var isBootstrapped = false;

    self.AppcuesBundleSettings = {
      accountId: accountId,
      VERSION: VERSION,
      RELEASE_ID: RELEASE_ID,
      GENERIC_BUNDLE_DOMAIN: GENERIC_BUNDLE_DOMAIN,
      GENERIC_BUNDLE_PATH: ACCOUNT_DETAILS.GENERIC_BUNDLE_PATH,
      styling:  ACCOUNT_DETAILS.styling,
      integrations: ACCOUNT_DETAILS.integrations,
      account: ACCOUNT_DETAILS.account,
      events: ACCOUNT_DETAILS.custom_events,
      defaultAppId: ACCOUNT_DETAILS.defaultAppId,
      API_HOSTNAME: ACCOUNT_DETAILS.API_HOSTNAME
    };

    var skipAMD = false;
    var windowGlobals = window["AppcuesSettings"];
    if (
      windowGlobals &&
      typeof windowGlobals === "object" &&
      windowGlobals.skipAMD === true
    ) {
      skipAMD = true;
    }

    var doc = self.document;
    self[ns] = self[ns] || [];
    var Appcues = self[ns];
    if (Appcues.invoked) {
        if (self.console && console.error) {
            console.error('Appcues snippet included twice.');
        }
        return;
    }

    if (Appcues.identify) return;
    Appcues.invoked = true;

    var methods = [
        "identify",
        "track",
        "page",
        "anonymous",
        "start",
        "show",
        "loadLaunchpad",
        "clearShow",
        "on",
        "off",
        "once",
        "reset",
        "debug",
        "user",
        "call",
        "settings",
        "content",
        "initMixpanel",
        "initHeap",
        "initIntercom",
        "initCIO",
        "initWoopra",
        "initAmplitude",
        "initKlaviyo",
        "initTD",
        "initLl",
        "initCalq",
        "initKM",
        "initGA",
        "initGTM",
        "initSegment",
        "initRudderstack",
        "initBraze",
        "initFullStory",
        "initHotjar",
        "initLogRocket",
        "group",

        // Methods solely for the injectable
        "injectContent",
        "injectStyles",
    ];

    var promises = [
        "user"
    ];

    function factory(method){
        return function(){
            var args = Array.prototype.slice.call(arguments);
            if (isBootstrapped) {
              self.Appcues[method].apply(self.Appcues, args);
            } else {
              args.unshift(method);
              Appcues.push(args);
            }
            return self.Appcues;
        };
    }

    // For each of our methods, generate a queueing stub.
    for (var i = 0; i < methods.length; i++) {
        var key = methods[i];
        Appcues[key] = factory(key);
    }

    for (var i = 0; i < promises.length; i++) {
        var key = promises[i];
        Appcues[key] = function() {
          var args = Array.prototype.slice.call(arguments);
          if (isBootstrapped) {
            return self.Appcues[key].apply(self.Appcues, args);
          } else {
            return new Promise(function(resolve, _reject) {
              args.unshift(resolve);
              args.unshift(key);
              Appcues.push(args);
            });
          }
        };
    }

    if (
      !skipAMD &&
      typeof window.define === "function" &&
      window.define.amd &&
      (window.define.amd.vendor == null ||
        window.define.amd.vendor !== "dojotoolkit.org")
    ) {
      window.define(function() { return Appcues; });
    }

    function load(){
        var bundleScript = doc.createElement("script");

        bundleScript.crossOrigin = "anonymous";
        bundleScript.integrity = "sha256-mTvql2mWHDErWiawhzPCQSRu4UCsbNl5oY4dsfwLO8A=";

        bundleScript.type = "text/javascript";
        bundleScript.src = GENERIC_BUNDLE_URL;
        bundleScript.async = true;
        bundleScript.onload = function () {
            isBootstrapped = true;
            Appcues.forEach(function(call) {
                var fnName = call[0];
                var args = call.slice(1);
                if (promises.indexOf(fnName) === -1) {
                  self[ns] && self[ns][fnName] &&
                      self[ns][fnName].apply(self[ns], args);
                } else {
                  var resolve = args[0];
                  var promiseArgs = args.slice(1);
                  self[ns] && self[ns][fnName] &&
                    self[ns][fnName].apply(self[ns], promiseArgs).then(
                      function() { resolve(arguments[0]); }
                    );
                }
            });
        };

        var firstScript = doc.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(bundleScript, firstScript);
    }
    Appcues.SNIPPET_VERSION = VERSION;
    load();
})(window, 'Appcues');
