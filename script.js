const currencyList = {
    USD: "United States Dollar",
    EUR: "Euro",
    GBP: "British Pound Sterling",
    JPY: "Japanese Yen",
    AUD: "Australian Dollar",
    CAD: "Canadian Dollar",
    CHF: "Swiss Franc",
    CNY: "Chinese Yuan",
    HKD: "Hong Kong Dollar",
    SGD: "Singapore Dollar",
    AED: "UAE Dirham",
    SAR: "Saudi Riyal",
    INR: "Indian Rupee",
    NZD: "New Zealand Dollar",
    SEK: "Swedish Krona",
    KRW: "South Korean Won",
    NOK: "Norwegian Krone",
    DKK: "Danish Krone",
    ZAR: "South African Rand",
    BRL: "Brazilian Real",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Netherlands Antillean Guilder",
    AOA: "Angolan Kwanza",
    ARS: "Argentine Peso",
    AWG: "Aruban Florin",
    AZN: "Azerbaijani Manat",
    BAM: "Bosnia-Herzegovina Convertible Mark",
    BBD: "Barbadian Dollar",
    BDT: "Bangladeshi Taka",
    BGN: "Bulgarian Lev",
    BHD: "Bahraini Dinar",
    BIF: "Burundian Franc",
    BMD: "Bermudian Dollar",
    BND: "Brunei Dollar",
    BOB: "Boliviano",
    BSD: "Bahamian Dollar",
    BTN: "Bhutanese Ngultrum",
    BWP: "Botswana Pula",
    BYN: "Belarusian Ruble",
    BZD: "Belize Dollar",
    CAD: "Canadian Dollar",
    CDF: "Congolese Franc",
    CLP: "Chilean Peso",
    COP: "Colombian Peso",
    CRC: "Costa Rican Colón",
    CUP: "Cuban Peso",
    CZK: "Czech Koruna",
    DJF: "Djiboutian Franc",
    DOP: "Dominican Peso",
    DZD: "Algerian Dinar",
    EGP: "Egyptian Pound",
    ERN: "Eritrean Nakfa",
    ETB: "Ethiopian Birr",
    FJD: "Fiji Dollar",
    FKP: "Falkland Islands Pound",
    GEL: "Georgian Lari",
    GGP: "Guernsey Pound",
    GHS: "Ghanaian Cedi",
    GIP: "Gibraltar Pound",
    GMD: "Gambian Dalasi",
    GNF: "Guinean Franc",
    GTQ: "Guatemalan Quetzal",
    GYD: "Guyanese Dollar",
    HNL: "Honduran Lempira",
    HRK: "Croatian Kuna",
    HTG: "Haitian Gourde",
    HUF: "Hungarian Forint",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli New Shekel",
    IMP: "Isle of Man Pound",
    IQD: "Iraqi Dinar",
    IRR: "Iranian Rial",
    ISK: "Icelandic Króna",
    JEP: "Jersey Pound",
    JMD: "Jamaican Dollar",
    JOD: "Jordanian Dinar",
    KES: "Kenyan Shilling",
    KGS: "Kyrgyzstani Som",
    KHR: "Cambodian Riel",
    KID: "Kiribati Dollar",
    KMF: "Comorian Franc",
    KPW: "North Korean Won",
    KWD: "Kuwaiti Dinar",
    KYD: "Cayman Islands Dollar",
    KZT: "Kazakhstani Tenge",
    LAK: "Lao Kip",
    LBP: "Lebanese Pound",
    LKR: "Sri Lankan Rupee",
    LRD: "Liberian Dollar",
    LSL: "Lesotho Loti",
    LYD: "Libyan Dinar",
    MAD: "Moroccan Dirham",
    MDL: "Moldovan Leu",
    MGA: "Malagasy Ariary",
    MKD: "Macedonian Denar",
    MMK: "Myanmar Kyat",
    MNT: "Mongolian Tögrög",
    MOP: "Macanese Pataca",
    MRU: "Mauritanian Ouguiya",
    MUR: "Mauritian Rupee",
    MVR: "Maldivian Rufiyaa",
    MWK: "Malawian Kwacha",
    MXN: "Mexican Peso",
    MYR: "Malaysian Ringgit",
    MZN: "Mozambican Metical",
    NAD: "Namibian Dollar",
    NGN: "Nigerian Naira",
    NIO: "Nicaraguan Córdoba",
    NPR: "Nepalese Rupee",
    OMR: "Omani Rial",
    PAB: "Panamanian Balboa",
    PEN: "Peruvian Sol",
    PGK: "Papua New Guinean Kina",
    PHP: "Philippine Peso",
    PKR: "Pakistani Rupee",
    PLN: "Polish Złoty",
    PYG: "Paraguayan Guaraní",
    QAR: "Qatari Riyal",
    RON: "Romanian Leu",
    RSD: "Serbian Dinar",
    RUB: "Russian Ruble",
    RWF: "Rwandan Franc",
    SBD: "Solomon Islands Dollar",
    SCR: "Seychellois Rupee",
    SDG: "Sudanese Pound",
    SGD: "Singapore Dollar",
    SHP: "Saint Helena Pound",
    SLE: "Sierra Leone New Leone",
    SLL: "Sierra Leone Old Leone",
    SOS: "Somali Shilling",
    SRD: "Surinamese Dollar",
    SSP: "South Sudanese Pound",
    STN: "São Tomé and Príncipe Dobra",
    SYP: "Syrian Pound",
    SZL: "Eswatini Lilangeni",
    THB: "Thai Baht",
    TJS: "Tajikistani Somoni",
    TMT: "Turkmenistani Manat",
    TND: "Tunisian Dinar",
    TOP: "Tongan Paʻanga",
    TRY: "Turkish Lira",
    TTD: "Trinidad and Tobago Dollar",
    TVD: "Tuvaluan Dollar",
    TWD: "New Taiwan Dollar",
    TZS: "Tanzanian Shilling",
    UAH: "Ukrainian Hryvnia",
    UGX: "Ugandan Shilling",
    UYU: "Uruguayan Peso",
    UZS: "Uzbekistani Som",
    VES: "Venezuelan Bolívar",
    VND: "Vietnamese Dong",
    VUV: "Vanuatu Vatu",
    WST: "Samoan Tala",
    XAF: "Central African CFA Franc",
    XCD: "East Caribbean Dollar",
    XDR: "Special Drawing Rights",
    XOF: "West African CFA Franc",
    XPF: "CFP Franc",
    YER: "Yemeni Rial",
    ZMW: "Zambian Kwacha",
    ZWL: "Zimbabwean Dollar"
};

let amountBox = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
let convertBtn = document.querySelector(".convert-btn");
let resultBox = document.getElementById("result");



function currencies() {
    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    for (let code in currencyList) {
        const option = `<option value="${code}"> ${code} - ${currencyList[code]}</option>`;
        fromSelect.innerHTML += option;
        toSelect.innerHTML += option;
    }
}

currencies();
async function convertMoney() {
    let amount = parseFloat(amountBox.value);
    let from = fromSelect.value;
    let to = toSelect.value;

    // Basic validation
    if (!amount || amount <= 0) {
        resultBox.style.color = "red";
        resultBox.textContent = "Please enter a valid amount.";
        return;
    }

    // Same currency
    if (from === to) {
        resultBox.style.color = "red";
        resultBox.textContent = "Same currency can't be converted";

    } else {
        resultBox.style.color = "green";
        resultBox.textContent = "Converting...";
        try {
            // Free API: Frankfurter
            let url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;
            let response = await fetch(url);
            let data = await response.json();

            let finalValue = data.rates[to];
            resultBox.style.color = "green";
            resultBox.textContent = `${amount} ${from} = ${finalValue.toFixed(2)} ${to}`;

        } catch (error) {
            resultBox.textContent = "Error in conversion. Try again.";
        }
    }

}





convertBtn.addEventListener("click", convertMoney);