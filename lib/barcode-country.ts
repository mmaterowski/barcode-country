import { getFormat, isGTIN } from 'gtin'
export function getCountry(EAN13: string): string {
    if (!isGTIN(EAN13)) throw new Error(`Passed value '${EAN13}' is not a valid barcode.`)
    if (getFormat(EAN13) !== 'GTIN-13') throw new Error(`Only EAN-13 Barcodes can recognized. ${EAN13} has invalid format: ${getFormat(EAN13)}`)
    const countryPrefix = Number(EAN13.substring(0, 3));
    switch (true) {
        case (countryPrefix >= 0 && countryPrefix <= 19):
            return 'United States of America'
        default:
            break;
    }




}


// 000 - 019	United States of America
// 020 - 029	restricted distribution
// 030 - 039	United States of America
// 040 - 049	restricted distribution
// 050 - 059	coupons
// 060 - 139	United States of America
// 200 - 299	local codes for internal company usage
// 300 - 379	France
// 380	Bulgaria
// 383	Slovenija
// 385	Croatia
// 387	Bosnia-Herzegovina
// 389	Montenegro
// 400 - 440	Germany
// 450 - 459	Japan
// 460 - 469	Russia
// 470	Kyrgyzstan
// 471	Taiwan
// 474	Estonia
// 475	Latvia
// 476	Azerbaijan
// 477	Lithuania
// 478	Uzbekistan
// 479	Sri Lanka
// 480	Philippines
// 481	Belarus
// 482	Ukraine
// 484	Moldova
// 485	Armenia
// 486	Georgia
// 487	Kazakstan
// 488	Tajikistan
// 489	Hong Kong
// 490 - 499	Japan
// 500 - 509	UK
// 520 - 521	Greece
// 528	Lebanon
// 529	Cyprus
// 530	Albania
// 531	Macedonia
// 535	Malta
// 539	Ireland
// 540 - 549	Belgium, Luxembourg
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