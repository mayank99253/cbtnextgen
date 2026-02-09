
const questionsData = {
  // HTML
  dca: {
    basic: [
        {
          id: 1,
          question: "What does CPU stand for? / CPU का पूरा नाम क्या है?",
          options: [
            "Central Power Unit / सेंट्रल पावर यूनिट",
            "Central Processing Unit / सेंट्रल प्रोसेसिंग यूनिट",
            "Computer Processing Unit / कंप्यूटर प्रोसेसिंग यूनिट",
            "Control Processing Unit / कंट्रोल प्रोसेसिंग यूनिट"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Excel file is called what? / Excel फ़ाइल को क्या कहा जाता है?",
          options: [
            "Document / डॉक्यूमेंट",
            "Workbook / वर्कबुक",
            "Slide / स्लाइड",
            "Page / पेज"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "MS Word is mainly used for what purpose? / MS Word का मुख्य उपयोग किस लिए होता है?",
          options: [
            "Calculations / गणना",
            "Word Processing / वर्ड प्रोसेसिंग",
            "Internet Browsing / इंटरनेट ब्राउज़िंग",
            "Drawing / ड्राइंग"
          ],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "Which memory is volatile? / कौन-सी मेमोरी वोलाटाइल होती है?",
          options: [
            "ROM / रोम",
            "Hard Disk / हार्ड डिस्क",
            "RAM / रैम",
            "Pen Drive / पेन ड्राइव"
          ],
          correctAnswer: 2
        },
        {
          id: 5,
          question: "Shortcut key to save a file is? / फ़ाइल सेव करने की शॉर्टकट की क्या है?",
          options: [
            "Ctrl + C / कॉपी",
            "Ctrl + V / पेस्ट",
            "Ctrl + S / सेव",
            "Ctrl + X / कट"
          ],
          correctAnswer: 2
        },
        {
          id: 6,
          question: "Binary number system uses which base? / बाइनरी नंबर सिस्टम किस बेस का उपयोग करता है?",
          options: [
            "10 / दस",
            "8 / आठ",
            "16 / सोलह",
            "2 / दो"
          ],
          correctAnswer: 3
        },
        {
          id: 7,
          question: "Which device is an input device? / इनपुट डिवाइस कौन-सा है?",
          options: [
            "Monitor / मॉनिटर",
            "Printer / प्रिंटर",
            "Keyboard / कीबोर्ड",
            "Speaker / स्पीकर"
          ],
          correctAnswer: 2
        },
        {
          id: 8,
          question: "Formula in Excel always starts with which symbol? / Excel में फ़ॉर्मूला किस चिन्ह से शुरू होता है?",
          options: [
            "+ / प्लस",
            "- / माइनस",
            "= / बराबर",
            "* / स्टार"
          ],
          correctAnswer: 2
        },
        {
          id: 9,
          question: "PowerPoint file is called what? / PowerPoint फ़ाइल को क्या कहा जाता है?",
          options: [
            "Document / डॉक्यूमेंट",
            "Slide / स्लाइड",
            "Presentation / प्रेज़ेंटेशन",
            "Workbook / वर्कबुक"
          ],
          correctAnswer: 2
        },
        {
          id: 10,
          question: "Which key deletes text from the right side? / दाईं ओर का टेक्स्ट हटाने के लिए कौन-सी कुंजी है?",
          options: [
            "Backspace / बैकस्पेस",
            "Delete / डिलीट",
            "Enter / एंटर",
            "Shift / शिफ्ट"
          ],
          correctAnswer: 0
        },
        {
          id: 11,
          question: "Which function is used to add numbers in Excel? / Excel में नंबर जोड़ने के लिए कौन-सा फ़ंक्शन है?",
          options: [
            "AVG / औसत",
            "ADD / जोड़",
            "SUM / सम",
            "TOTAL / टोटल"
          ],
          correctAnswer: 2
        },
        {
          id: 12,
          question: "Who is known as the father of computers? / कंप्यूटर के जनक कौन हैं?",
          options: [
            "Bill Gates / बिल गेट्स",
            "Charles Babbage / चार्ल्स बैबेज",
            "Steve Jobs / स्टीव जॉब्स",
            "Alan Turing / एलन ट्यूरिंग"
          ],
          correctAnswer: 1
        },
        {
          id: 13,
          question: "Which tab is used to insert pictures in MS Word? / MS Word में चित्र जोड़ने के लिए कौन-सा टैब है?",
          options: [
            "Home / होम",
            "Insert / इंसर्ट",
            "Layout / लेआउट",
            "Review / रिव्यू"
          ],
          correctAnswer: 1
        },
        {
          id: 14,
          question: "Which function finds the highest value in Excel? / Excel में सबसे बड़ी वैल्यू खोजने का फ़ंक्शन कौन-सा है?",
          options: [
            "MIN / न्यूनतम",
            "MAX / अधिकतम",
            "COUNT / गिनती",
            "ROUND / राउंड"
          ],
          correctAnswer: 1
        },
        {
          id: 15,
          question: "Linux is an example of what? / Linux किसका उदाहरण है?",
          options: [
            "Hardware / हार्डवेयर",
            "Application Software / एप्लिकेशन सॉफ़्टवेयर",
            "Operating System / ऑपरेटिंग सिस्टम",
            "Compiler / कंपाइलर"
          ],
          correctAnswer: 2
        },
        {
          id: 16,
          question: "Which view is used to run slides in PowerPoint? / PowerPoint में स्लाइड चलाने के लिए कौन-सा व्यू है?",
          options: [
            "Normal / नॉर्मल",
            "Slide Sorter / स्लाइड सॉर्टर",
            "Slide Show / स्लाइड शो",
            "Notes / नोट्स"
          ],
          correctAnswer: 2
        },
        {
          id: 17,
          question: "Which function returns today’s date in Excel? / Excel में आज की तारीख दिखाने वाला फ़ंक्शन कौन-सा है?",
          options: [
            "NOW() / नाउ",
            "DATE() / डेट",
            "TODAY() / टुडे",
            "DAY() / डे"
          ],
          correctAnswer: 2
        },
        {
          id: 18,
          question: "Internet browser example is? / इंटरनेट ब्राउज़र का उदाहरण कौन-सा है?",
          options: [
            "Google / गूगल",
            "Chrome / क्रोम",
            "Gmail / जीमेल",
            "Yahoo Mail / याहू मेल"
          ],
          correctAnswer: 1
        },
        {
          id: 19,
          question: "Footer appears at which position? / Footer पेज के किस भाग में होता है?",
          options: [
            "Top / ऊपर",
            "Bottom / नीचे",
            "Middle / बीच",
            "Side / साइड"
          ],
          correctAnswer: 1
        },
        {
          id: 20,
          question: "Smallest unit of Excel worksheet is? / Excel वर्कशीट की सबसे छोटी इकाई क्या है?",
          options: [
            "Row / रो",
            "Column / कॉलम",
            "Cell / सेल",
            "Sheet / शीट"
          ],
          correctAnswer: 2
        },
        {
          id: 21,
          question: "Charts are used for what purpose? / चार्ट का उपयोग किस लिए होता है?",
          options: [
            "Typing / टाइपिंग",
            "Calculation / गणना",
            "Visual representation / दृश्य प्रस्तुति",
            "Printing / प्रिंटिंग"
          ],
          correctAnswer: 2
        },
        {
          id: 22,
          question: "Email stands for what? / Email का पूरा नाम क्या है?",
          options: [
            "Easy Mail / आसान मेल",
            "Electronic Mail / इलेक्ट्रॉनिक मेल",
            "Express Mail / एक्सप्रेस मेल",
            "Extra Mail / अतिरिक्त मेल"
          ],
          correctAnswer: 1
        },
        {
          id: 23,
          question: "Which function counts numeric cells only? / केवल नंबर वाले सेल गिनने वाला फ़ंक्शन कौन-सा है?",
          options: [
            "COUNT / काउंट",
            "COUNTA / काउंटा",
            "SUM / सम",
            "MAX / मैक्स"
          ],
          correctAnswer: 0
        },
        {
          id: 24,
          question: "Which option makes text bold in MS Word? / MS Word में टेक्स्ट बोल्ड करने का विकल्प कौन-सा है?",
          options: [
            "I / इटैलिक",
            "U / अंडरलाइन",
            "B / बोल्ड",
            "S / स्ट्राइक"
          ],
          correctAnswer: 2
        },
        {
          id: 25,
          question: "Which memory stores data permanently? / डेटा स्थायी रूप से कौन-सी मेमोरी रखती है?",
          options: [
            "RAM / रैम",
            "Cache / कैश",
            "Hard Disk / हार्ड डिस्क",
            "Register / रजिस्टर"
          ],
          correctAnswer: 2
        },
        {
          id: 26,
          question: "WAN covers which area? / WAN किस क्षेत्र को कवर करता है?",
          options: [
            "Room / कमरा",
            "Building / इमारत",
            "City / शहर",
            "Large area / बड़ा क्षेत्र"
          ],
          correctAnswer: 3
        },
        {
          id: 27,
          question: "Which function rounds a number in Excel? / Excel में नंबर राउंड करने का फ़ंक्शन कौन-सा है?",
          options: [
            "FIX / फिक्स",
            "ROUND / राउंड",
            "INT / इंट",
            "DEC / डेस"
          ],
          correctAnswer: 1
        },
        {
          id: 28,
          question: "Header appears at which position? / Header पेज के किस भाग में होता है?",
          options: [
            "Top / ऊपर",
            "Bottom / नीचे",
            "Center / बीच",
            "Side / साइड"
          ],
          correctAnswer: 0
        },
        {
          id: 29,
          question: "Sorting in Excel means what? / Excel में Sorting का मतलब क्या है?",
          options: [
            "Deleting data / डेटा हटाना",
            "Arranging data / डेटा क्रम में रखना",
            "Copying data / डेटा कॉपी करना",
            "Hiding data / डेटा छुपाना"
          ],
          correctAnswer: 1
        },
        {
          id: 30,
          question: "Professional email should be how? / प्रोफेशनल ईमेल कैसा होना चाहिए?",
          options: [
            "Long / लंबा",
            "Short and clear / छोटा और स्पष्ट",
            "Funny / मज़ेदार",
            "Emotional / भावनात्मक"
          ],
          correctAnswer: 1
        },
        {
          id: 31,
          question: "Which function returns date and time? / कौन-सा फ़ंक्शन तारीख और समय दोनों देता है?",
          options: [
            "TODAY() / टुडे",
            "DATE() / डेट",
            "NOW() / नाउ",
            "TIME() / टाइम"
          ],
          correctAnswer: 2
        },
        {
          id: 32,
          question: "What is E-commerce? / E-commerce क्या है?",
          options: [
            "Online shopping / ऑनलाइन खरीदारी",
            "Online study / ऑनलाइन पढ़ाई",
            "Email service / ईमेल सेवा",
            "Internet browsing / इंटरनेट ब्राउज़िंग"
          ],
          correctAnswer: 0
        },
        {
          id: 33,
          question: "Which tab is used to add page numbers? / पेज नंबर जोड़ने के लिए कौन-सा टैब है?",
          options: [
            "Home / होम",
            "Insert / इंसर्ट",
            "Review / रिव्यू",
            "View / व्यू"
          ],
          correctAnswer: 1
        },
        {
          id: 34,
          question: "CPU is also called what? / CPU को और क्या कहा जाता है?",
          options: [
            "Brain of computer / कंप्यूटर का मस्तिष्क",
            "Memory / मेमोरी",
            "Storage / स्टोरेज",
            "Software / सॉफ्टवेयर"
          ],
          correctAnswer: 0
        },
        {
          id: 35,
          question: "Which software is system software? / सिस्टम सॉफ्टवेयर कौन-सा है?",
          options: [
            "MS Word / एमएस वर्ड",
            "Excel / एक्सेल",
            "Windows / विंडोज़",
            "Photoshop / फोटोशॉप"
          ],
          correctAnswer: 2
        },
        {
          id: 36,
          question: "Conditional formatting is used for? / Conditional Formatting का उपयोग किस लिए होता है?",
          options: [
            "Insert image / चित्र जोड़ना",
            "Highlight data / डेटा हाइलाइट करना",
            "Protect sheet / शीट सुरक्षित करना",
            "Print sheet / शीट प्रिंट करना"
          ],
          correctAnswer: 1
        },
        {
          id: 37,
          question: "Which device identifies a computer on a network? / नेटवर्क पर कंप्यूटर की पहचान किससे होती है?",
          options: [
            "File / फ़ाइल",
            "IP Address / आईपी एड्रेस",
            "Folder / फ़ोल्डर",
            "Browser / ब्राउज़र"
          ],
          correctAnswer: 1
        },
        {
          id: 38,
          question: "Which key combination is used to copy? / कॉपी करने की शॉर्टकट की क्या है?",
          options: [
            "Ctrl + X / कट",
            "Ctrl + V / पेस्ट",
            "Ctrl + C / कॉपी",
            "Ctrl + Z / अनडू"
          ],
          correctAnswer: 2
        },
        {
          id: 39,
          question: "Which option creates rows and columns in Word? / Word में पंक्तियाँ और कॉलम बनाने के लिए क्या उपयोग होता है?",
          options: [
            "Shape / शेप",
            "Table / टेबल",
            "Chart / चार्ट",
            "SmartArt / स्मार्टआर्ट"
          ],
          correctAnswer: 1
        },
        {
          id: 40,
          question: "Which device shows output? / आउटपुट दिखाने वाला डिवाइस कौन-सा है?",
          options: [
            "Keyboard / कीबोर्ड",
            "Mouse / माउस",
            "Monitor / मॉनिटर",
            "Scanner / स्कैनर"
          ],
          correctAnswer: 2
        },
        {
          id: 41,
          question: "Transition is applied to what in PowerPoint? / PowerPoint में Transition किस पर लगाया जाता है?",
          options: [
            "Text / टेक्स्ट",
            "Slide / स्लाइड",
            "Image / चित्र",
            "Chart / चार्ट"
          ],
          correctAnswer: 1
        },
        {
          id: 42,
          question: "Which function finds smallest value? / सबसे छोटी वैल्यू खोजने वाला फ़ंक्शन कौन-सा है?",
          options: [
            "MAX / मैक्स",
            "MIN / मिन",
            "COUNT / काउंट",
            "ROUND / राउंड"
          ],
          correctAnswer: 1
        },
        {
          id: 43,
          question: "Which key is used to start a new line? / नई लाइन शुरू करने के लिए कौन-सी कुंजी है?",
          options: [
            "Shift / शिफ्ट",
            "Enter / एंटर",
            "Ctrl / कंट्रोल",
            "Alt / ऑल्ट"
          ],
          correctAnswer: 1
        },
        {
          id: 44,
          question: "Which network covers a small area? / छोटे क्षेत्र को कवर करने वाला नेटवर्क कौन-सा है?",
          options: [
            "LAN / लैन",
            "WAN / वैन",
            "MAN / मैन",
            "PAN / पैन"
          ],
          correctAnswer: 0
        },
        {
          id: 45,
          question: "Which function converts text to uppercase? / टेक्स्ट को बड़े अक्षरों में बदलने वाला फ़ंक्शन कौन-सा है?",
          options: [
            "LOWER / लोअर",
            "PROPER / प्रॉपर",
            "UPPER / अपर",
            "TEXT / टेक्स्ट"
          ],
          correctAnswer: 2
        },
        {
          id: 46,
          question: "Which feature is used to change text style? / टेक्स्ट स्टाइल बदलने के लिए कौन-सा फीचर है?",
          options: [
            "Formatting / फॉर्मेटिंग",
            "Printing / प्रिंटिंग",
            "Saving / सेविंग",
            "Scanning / स्कैनिंग"
          ],
          correctAnswer: 0
        },
        {
          id: 47,
          question: "Which software is used to make presentations? / प्रेज़ेंटेशन बनाने के लिए कौन-सा सॉफ़्टवेयर है?",
          options: [
            "MS Word / एमएस वर्ड",
            "MS Excel / एमएस एक्सेल",
            "MS PowerPoint / एमएस पावरपॉइंट",
            "Paint / पेंट"
          ],
          correctAnswer: 2
        },
        {
          id: 48,
          question: "Which function counts non-empty cells? / खाली न होने वाले सेल गिनने वाला फ़ंक्शन कौन-सा है?",
          options: [
            "COUNT / काउंट",
            "COUNTA / काउंटा",
            "SUM / सम",
            "MAX / मैक्स"
          ],
          correctAnswer: 1
        },
        {
          id: 49,
          question: "Which device is used to type text? / टेक्स्ट टाइप करने के लिए कौन-सा डिवाइस है?",
          options: [
            "Monitor / मॉनिटर",
            "Mouse / माउस",
            "Keyboard / कीबोर्ड",
            "Printer / प्रिंटर"
          ],
          correctAnswer: 2
        },
        {
          id: 50,
          question: "What is a computer? / कंप्यूटर क्या है?",
          options: [
            "Electronic machine / इलेक्ट्रॉनिक मशीन",
            "Manual device / मैन्युअल डिवाइस",
            "Mechanical tool / मैकेनिकल टूल",
            "Natural machine / प्राकृतिक मशीन"
          ],
          correctAnswer: 0
        }
    ],
  },

  // CSS
  // css: {
  //   basic: [
  //     { id: 1, question: "Which property changes text color?", options: ["font-color", "text-color", "color", "fg-color"], correctAnswer: 2 },
  //     { id: 2, question: "How do you apply a class selector in CSS?", options: [".className", "#className", "className", "*className"], correctAnswer: 0 },
  //     { id: 3, question: "Which property sets the background color?", options: ["bgcolor", "background", "background-color", "color"], correctAnswer: 2 },
  //     { id: 4, question: "Which property controls spacing inside an element?", options: ["margin", "padding", "gap", "spacing"], correctAnswer: 1 },
  //     { id: 5, question: "How to make text bold using CSS?", options: ["font-weight: bold;", "text-style: bold;", "font: bold;", "font-style: bold;"], correctAnswer: 0 },
  //     { id: 6, question: "Which selector targets an element by id?", options: ["#id", ".id", "id", "*id"], correctAnswer: 0 },
  //     { id: 7, question: "Which property controls the font size?", options: ["text-size", "font-size", "size", "type-size"], correctAnswer: 1 },
  //     { id: 8, question: "Which display value places elements inline?", options: ["block", "inline", "flex", "grid"], correctAnswer: 1 },
  //     { id: 9, question: "Which property controls element visibility but keeps layout?", options: ["display: none", "visibility: hidden", "opacity: 0", "hidden: true"], correctAnswer: 1 },
  //     { id: 10, question: "How do you write a comment in CSS?", options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"], correctAnswer: 1 },
  //     { id: 11, question: "Which box-sizing value makes width include padding and border?", options: ["content-box", "border-box", "padding-box", "box-total"], correctAnswer: 1 },
  //     { id: 12, question: "Which property defines the font family?", options: ["font-family", "font-type", "font", "typeface"], correctAnswer: 0 },
  //     { id: 13, question: "Which property aligns inline content horizontally inside an element?", options: ["vertical-align", "text-align", "align-items", "justify-content"], correctAnswer: 1 },
  //     { id: 14, question: "Which property controls the space between lines of text?", options: ["line-spacing", "leading", "line-height", "text-height"], correctAnswer: 2 },
  //     { id: 15, question: "Which property changes the mouse cursor when hovering over an element?", options: ["pointer", "cursor", "mouse", "hover-cursor"], correctAnswer: 1 },
  //     { id: 16, question: "Which unit is absolute and not relative to font-size?", options: ["em", "rem", "px", "%"], correctAnswer: 2 },
  //     { id: 17, question: "Which at-rule is used to define a custom font-face?", options: ["@font", "@font-face", "@import-font", "@face"], correctAnswer: 1 },
  //     { id: 18, question: "Which property is the shorthand for setting all four paddings at once?", options: ["padding-all", "padding", "paddings", "padding-shorthand"], correctAnswer: 1 },
  //     { id: 19, question: "Which property controls an element's transparency?", options: ["opacity", "transparent", "visibility", "alpha"], correctAnswer: 0 },
  //     { id: 20, question: "Which property sets the width of an element?", options: ["width", "size", "w", "max-width"], correctAnswer: 0 }
  //   ],
  // },
}
export default questionsData;