import { getFormat, isGTIN } from 'gtin'
export function getCountry(EAN13: string): string {
    if (!isGTIN(EAN13)) throw new Error(`Passed value '${EAN13}' is not a valid barcode.`)
    if (getFormat(EAN13) !== 'GTIN-13') throw new Error(`Only EAN-13 Barcodes can recognized. ${EAN13} has invalid format: ${getFormat(EAN13)}`)
    const countryPrefix = Number(EAN13.substring(0, 3));
    switch (true) {
        case (countryPrefix >= 0 && countryPrefix <= 19 || countryPrefix >= 30 && countryPrefix <= 39 || countryPrefix >= 60 && countryPrefix <= 99):
            return 'USA and Canada'
        case (countryPrefix >= 20 && countryPrefix <= 29 || countryPrefix >= 40 && countryPrefix <= 49 || countryPrefix >= 200 && countryPrefix <= 299):
            return 'Restricted distribution'
        case (countryPrefix >= 50 && countryPrefix <= 59):
            return 'GS1 US reserved for future use'
        case (countryPrefix >= 100 && countryPrefix <= 139):
            return 'USA'
        case (countryPrefix == 380):
            return 'Bulgaria'
        case (countryPrefix == 383):
            return 'Slovenia'
        case (countryPrefix == 385):
            return 'Croatia'
        case (countryPrefix == 387):
            return 'Bosnia and Herzegovina'
        case (countryPrefix == 389):
            return 'Montenegro'
        case (countryPrefix == 390):
            return 'Kosovo'
        case (countryPrefix >= 400 && countryPrefix <= 440):
            return 'Germany'
        case (countryPrefix >= 450 && countryPrefix <= 459 || countryPrefix >= 490 && countryPrefix <= 499):
            return 'Japan'
        case (countryPrefix >= 460 && countryPrefix <= 469):
            return 'Russia'
        case (countryPrefix == 470):
            return ' Kyrgyzstan'
        case (countryPrefix == 471):
            return 'Taiwan'
        case (countryPrefix == 471):
            return 'Taiwan'
        case (countryPrefix == 474):
            return 'Estonia'
        case (countryPrefix === 475):
            return 'Latvia'
        case (countryPrefix === 476):
            return 'Azerbaijan'
        case (countryPrefix === 477):
            return 'Lithuania'
        case (countryPrefix === 478):
            return 'Uzbekistan'
        case (countryPrefix === 479):
            return 'Sri Lanka'
        case (countryPrefix === 480):
            return 'Philippines'
        case (countryPrefix === 481):
            return 'Belarus'
        case (countryPrefix === 482):
            return 'Ukraine'
        case (countryPrefix === 483):
            return 'Turkmenistan'
        case (countryPrefix === 484):
            return 'Moldova'
        case (countryPrefix === 485):
            return 'Armenia'
        case (countryPrefix === 486):
            return 'Georgia'
        case (countryPrefix === 487):
            return 'Kazakhstan'
        case (countryPrefix === 488):
            return 'Tajikistan'
        case (countryPrefix === 489):
            return 'Hong Kong'
        case (countryPrefix >= 500 && countryPrefix <= 509):
            return 'United Kingdom'
        case (countryPrefix >= 520 && countryPrefix <= 521):
            return 'Greece'
        case (countryPrefix === 528):
            return 'Lebanon'
        case (countryPrefix === 529):
            return 'Cyprus'
        case (countryPrefix === 530):
            return 'Albania'
        case (countryPrefix === 531):
            return 'North Macedonia'
        case (countryPrefix === 535):
            return 'Malta'
        case (countryPrefix === 539):
            return 'Ireland'
        case (countryPrefix >= 540 && countryPrefix <= 549):
            return 'Belgium and Luxemburg'
        case (countryPrefix === 560):
            return 'Portugal'
        case (countryPrefix === 569):
            return 'Iceland'
        case (countryPrefix >= 570 && countryPrefix <= 579):
            return 'Denmark, Faroe Islands and Greenland'
        case (countryPrefix === 590):
            return 'Poland'
        case (countryPrefix === 594):
            return 'Romania'
        case (countryPrefix === 599):
            return 'Hungary'
        case (countryPrefix >= 600 && countryPrefix <= 601):
            return 'South Africa'
        case (countryPrefix === 603):
            return 'Ghana'
        case (countryPrefix === 604):
            return 'Senegal'
        case (countryPrefix === 608):
            return 'Bahrain'
        case (countryPrefix === 609):
            return 'Mauritius'
        case (countryPrefix === 611):
            return 'Morocco'
        case (countryPrefix === 613):
            return 'Algeria'
        case (countryPrefix === 615):
            return 'Nigeria'
        case (countryPrefix === 616):
            return 'Kenya'
        case (countryPrefix === 617):
            return 'Cameroon'
        case (countryPrefix === 618):
            return 'Ivory Coast'
        case (countryPrefix === 619):
            return 'Tunisia'
        case (countryPrefix === 620):
            return 'Tanzania'
        case (countryPrefix === 621):
            return 'Syria'
        case (countryPrefix === 622):
            return 'Egypt'
        case (countryPrefix === 623):
            return 'Brunei'
        case (countryPrefix === 624):
            return 'Libya'
        case (countryPrefix === 625):
            return 'Jordan'
        case (countryPrefix === 626):
            return 'Iran'
        case (countryPrefix === 627):
            return 'Kuwait'
        case (countryPrefix === 628):
            return 'Saudi Arabia'
        case (countryPrefix === 629):
            return 'United Arab Emirates'
        case (countryPrefix === 630):
            return 'Qatar'
        case (countryPrefix === 631):
            return 'Namibia'
        case (countryPrefix >= 640 && countryPrefix <= 649):
            return 'Finland'
        case (countryPrefix >= 690 && countryPrefix <= 699):
            return 'China'
        case (countryPrefix >= 700 && countryPrefix <= 709):
            return 'Norway'
        case (countryPrefix === 729):
            return 'Israel'
        case (countryPrefix >= 730 && countryPrefix <= 739):
            return 'Sweden'
        case (countryPrefix === 740):
            return 'Guatemala'
        case (countryPrefix === 741):
            return 'El Salvador'
        case (countryPrefix === 742):
            return 'Honduras'
        case (countryPrefix === 743):
            return 'Nicaragua'
        case (countryPrefix === 744):
            return 'Costa Rica'
        case (countryPrefix === 745):
            return 'Panama'
        case (countryPrefix === 746):
            return 'Dominican Republic'
        case (countryPrefix === 750):
            return 'Mexico'
        case (countryPrefix >= 754 && countryPrefix <= 755):
            return 'Canada'
        case (countryPrefix === 759):
            return 'Venezuela'
        case (countryPrefix >= 760 && countryPrefix <= 769):
            return 'Switzerland and  Liechtenstein'
        case (countryPrefix >= 770 && countryPrefix <= 771):
            return 'Colombia'
        case (countryPrefix === 773):
            return 'Uruguay'
        case (countryPrefix === 775):
            return 'Peru'
        case (countryPrefix === 777):
            return 'Bolivia'
        case (countryPrefix === 778 || countryPrefix === 779):
            return 'Argentina'
        case (countryPrefix === 780):
            return 'Chile'
        case (countryPrefix === 784):
            return 'Paraguay'
        case (countryPrefix === 786):
            return 'Ecuador'
        default:
            break;
    }




}



// 560	Portugal
// 569	Iceland
// 570 - 579	Denmark
// 590	Poland
// 594	Romania
// 599	Hungary
// 600 - 601	South Africa
// 603	Ghana
// 604	Senegal
// 608	Bahrain
// 609	Mauritius
// 611	Morocco
// 613	Algeria
// 615	Nigeria
// 616	Kenya
// 617	Cameroon
// 618	Ivory Coast
// 619	Tunisia
// 620	Tanzania
// 621	Syria
// 622	Egypt
// 623	Brunei
// 624	Libya
// 625	Jordan
// 626	Iran
// 627	Kuwait
// 628	Saudi Arabia
// 629	United Arab Emirates
// 640 - 649	Finland
// 690 - 699	China
// 700 - 709	Norway
// 729	Israel
// 730 - 739	Sweden
// 740	Guatemala
// 741	El Salvador
// 742	Honduras
// 743	Nicaragua
// 744	Costa Rica
// 745	Panama
// 746	Republica Dominicana
// 750	Mexico
// 754 - 755	Canada
// 759	Venezuela
// 760 - 769	Schweiz, Suisse, Svizzera
// 770 - 771	Colombia
// 773	Uruguay
// 775	Peru
// 777	Bolivia
// 778 - 779	Argentina
// 780	Chile
// 784	Paraguay
// 786	Ecuador
// 789 - 790	Brasil
// 800 - 839	Italy
// 840 - 849	Spain
// 850	Cuba
// 858	Slovakia
// 859	Czech
// 860	Serbia
// 865	Mongolia
// 867	North Korea
// 868 - 869	Turkey
// 870 - 879	Netherlands
// 880	South Korea
// 883	Myanmar
// 884	Cambodia
// 885	Thailand
// 888	Singapore
// 890	India
// 893	Vietnam
// 896	Pakistan
// 899	Indonesia
// 900 - 919	Austria
// 930 - 939	Australia
// 940 - 949	New Zealand
// 950	Global Office
// 951	Global Office (EPC)
// 952	Used for demonstrations and examples of the GS1 system
// 955	Malaysia
// 958	Macau
// 960 - 969	Global Office (GTIN-8)
// 977	ISSN - International Standard Serial Number
// 978	ISBN - International Standard Book Number
// 979	ISBN - International Standard Book Number
// ISMN - International Standard Music Number for Notated Music
// (9790 - ISMN, 97910, 97911 - ISBN)
// 980	refund receipts
// 981 - 984	coupon identification for common currency areas
// 990 - 999	coupon identification