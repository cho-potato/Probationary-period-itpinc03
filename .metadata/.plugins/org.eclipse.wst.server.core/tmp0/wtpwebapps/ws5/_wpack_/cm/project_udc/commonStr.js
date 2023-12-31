/*amd /cm/project_udc/commonStr.xml 14878 9811f1e64124e7994fca2b5d9c92ba9b4b3984406efee5374711dc33ff8cc5ac */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.lpad,scwin.rpad,scwin.formatSSN,scwin.formatPhone,\n                               scwin.formatTime,scwin.getLocale,scwin.existKorean,scwin.isKorean,\n                               scwin.isFinalConsonant,scwin.attachPostposition,scwin.isBizID,scwin.isSSN,\n                               scwin.isEmail,scwin.isPhone,scwin.replaceAll,scwin.trim,scwin.getByteLength,scwin.formatTime,scwin.isFinalConsonant,scwin.isEmail'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	
/**
 * @method
 * @name lpad
 * @description 좌측에 문자열 채우기
 * @return <String>|일정길이 만큼 char 으로 채워진 문자열
 * @param <String>|str|str 포멧터를 적용할 문자열
 * @param <String>|length|length 0 으로 채울 길이
 * @param <String>|charVal|채우고자하는 문자(char) 
 * @hidden N
 * @exception 
 * @sample $c.str.lpad("24", 4, "0"); // "0024"
 */  
	scwin.lpad = function(str, length, charVal) {
		if (typeof str === "number") {
			str = str.toString();
		}
		
		if (charVal.length > length) {
			console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
			return str + "";
		}
		
		while (str.length < length) {
			str = charVal + str;
		}
	
		str = str.length >= length ? str.substring(0, length) : str;
		return str;
	};
	
/**
 * @method
 * @name rpad
 * @description 우측에 문자열 채우기
 * @return <String>|일정길이 만큼 char 으로 채워진 문자열
 * @param <String>|str|str 포멧터를 적용할 문자열
 * @param <String>|length|length 0 으로 채울 길이
 * @param <String>|charVal|채우고자하는 문자(char) 
 * @hidden N
 * @exception 
 * @sample $c.str.rpad("24", 4, "0"); // "2400"
 */  
	scwin.rpad = function(str, length, charVal) {
		if (charVal.length > length) {
			console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
			return str + "";
		}
		while (str.length < length)
			str += charVal;
		str = str.length >= length ? str.substring(0, length) : str;
		return str;
	};
	
	
/**
 * @method
 * @name formatSSN
 * @description 주민번호 문자열에 Formatter(######-#######)를 적용하여 반환한다.
 * @return <String>|포멧터가 적용된 주민번호 문자열
 * @param <String>|str|주민번호 문자열
 * @hidden N
 * @exception 
 * @sample $c.str.formatSSN("1234561234567");  // "123456-1234567"
 */  
	scwin.formatSSN = function (str) {
		var front = String(str).substr(0, 6);
		var back = String(str).substr(6, 7);
		var output = front + "-" + back;
	
		return output;
	};
	
	
/**
 * @method
 * @name formatPhone
 * @description 문자열에 전화번호 형식 Formatter를 적용하여 반환한다.
 * @return <String>|포멧터가 적용된 문자열
 * @param <String>|str|포멧터를 적용할 전화번호(문자열)
 * @hidden N
 * @exception 
 * @sample $c.str.formatPhone("0212345678");  // "02-1234-5678"
           $c.str.formatPhone("05051234567"); // "0505-123-4567"
           $c.str.formatPhone("03112345678"); // "031-1234-5678"
           $c.str.formatPhone("0311234567");  // "031-123-4567"
 */  
	scwin.formatPhone = function (str) {
		  try {
			  str = str.replace(/\s+/g,"");
			  var commCdList = ["0505"]; // 4자리 국번 ,예외가 되는 국번 확인
			  var commCdNum = str.substr(0,4); // 국번 4자리 확인
			  if(commCdList.indexOf(commCdNum) >-1){ //국번이 0505 인경우
				  return str.replace(/^(01[0136789]{1}|02|0[3-9]{1}[0-9]{1}[0-9]{1})-?([*0-9]{3,4})-?([0-9]{4})$/,"$1-$2-$3");
			  }else if(str.length <=11){
				  return str.replace(/^(01[0136789]{1}|02|0[3-9]{1}[0-9]{1})-?([*0-9]{3,4})-?([0-9]{4})$/,"$1-$2-$3");
			  }else{
				  return str;
			  }
		  } catch (ex) {
			  console.error(ex);
		  }
	};
	
	
/**
 * @method
 * @name formatTime
 * @description 문자열에 시간 형식 Formatter를 적용하여 반환한다.
 * @return <String>|포멧터가 적용된 문자열
 * @param <String>|str|포멧터를 적용할 문자열 
 * @hidden N
 * @exception 
 * @sample $c.str.formatTime("123402"); // 12:34:02
           $c.str.formatTime("1234"); // 12:34:02
 */  
	scwin.formatTime = function(str) {
		try {
			var hour = String(str).substr(0, 2);
			var minute = String(str).substr(2, 2);
			var second = String(str).substr(4, 2);
			if (com.util.isEmpty(second)) {
				return hour + ":" + minute;
			} else {
				return hour + ":" + minute + ":" + second;
			}
		} catch (ex) {
			console.error(ex);
			return str;
		}
	};
	
/**
 * @method
 * @name getLocale
 * @description 문자(char)의 유형을 리턴한다
 * @return <Number>|유니코드 기준
 한글음절[ 44032 ~ 55203 ] => 1
 한글자모[ 4352 ~ 4601 ] => 2
 숫자[ 48 ~ 57 ] => 4
 특수문자[ 32 ~ 47 || 58 ~ 64 || 91 ~ 96 || 123 ~ 126 ] => 8
 영문대[ 65 ~ 90 ] => 16 
 영문소[ 97 ~ 122 ] => 32
 기타[그외 나머지] => 48
 * @param <String>|str|어떤 유형인지 리턴받을 문자 
 * @hidden N
 * @exception 
 * @sample $c.str.getLocale("가"); // 1
$c.str.getLocale("ㅏ"); // 2
$c.str.getLocale("1");  // 4
$c.str.getLocale("!");  // 8
$c.str.getLocale("A");  // 16
$c.str.getLocale("a");  // 32
$c.str.getLocale("¿");  // 48
 */   
	scwin.getLocale = function (str) {
		var locale = 0;
		if (str.length > 0) {
			var charCode = str.charCodeAt(0);
	
			if (charCode >= 0XAC00 && charCode <= 0XD7A3) { // 한글음절.[ 44032 ~ 55203 ]
				locale = 0X1; // 1
			} else if ((charCode >= 0X1100 && charCode <= 0X11F9) || (charCode >= 0X3131 && charCode <= 0X318E)) { // 한글자모.[ 4352 ~ 4601 ]
				locale = 0X2; // 2
			} else if (charCode >= 0X30 && charCode <= 0X39) { // 숫자.[ 48 ~ 57 ]
				locale = 0X4; // 4
			} else if ((charCode >= 0X20 && charCode <= 0X2F) || (charCode >= 0X3A && charCode <= 0X40) || (charCode >= 0X5B && charCode <= 0X60)
				|| (charCode >= 0X7B && charCode <= 0X7E)) { // 특수문자
				locale = 0X8; // 8
			} else if (charCode >= 0X41 && charCode <= 0X5A) { // 영문 대.[ 65 ~ 90 ]
				locale = 0X10; // 16
			} else if (charCode >= 0X61 && charCode <= 0X7A) { // 영문 소.[ 97 ~ 122 ]
				locale = 0X20; // 32
			} else { // 기타
				locale = 0X30; // 48
			}
		}
		return locale;
	};
	
/**
 * @method
 * @name existKorean
 * @description 입력받은 문자열에 한글이 포함되어 있는지 여부를 검사한다.
 * @return <Boolean>|true or false
 * @param <String>|value|한글 유형인지 검증할 문자열 
 * @hidden N
 * @exception 
 * @sample $c.str.existKorean("abc"); // false
$c.str.existKorean("abc무궁화"); // true
$c.str.existKorean("무궁화꽃이"); // true
 */  
	scwin.existKorean = function (value) {
		check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
		if (check.test(value)) {
			return true;
		} else {
			return false;
		}
	};
	
/**
 * @method
 * @name isKorean
 * @description 입력받은 문자열 전체가 한글인지를 검사한다.
 * @return <Boolean>|true or false
 * @param <String>|str|한글이 포함되어 있는지 검증 받을 문자열 
 * @hidden N
 * @exception 
 * @sample $c.str.isKorean("abcd"); // false
$c.str.isKorean("abcd무궁화"); // false
$c.str.isKorean("무궁화"); // true
 */  
	scwin.isKorean = function (str) {
		var result = false;
	
		for (var i = 0; i < str.length; i++) {
			c = str.charAt(i);
			if (!scwin.existKorean(c)) {
				result = false;
				break;
			} else {
				result = true;
			}
	
		}
		return result;
	};
	
	
/**
 * @method
 * @name isFinalConsonant
 * @description 종성이 존재하는지 여부를 검사한다.
 * @return <Boolean>|true or false
 * @param <String>|str|종성의 존재 여부를 검사할 문자열 
 * @hidden N
 * @exception 
 * @sample $c.str.isFinalConsonant("종서")
// return 예시) false
$c.str.isFinalConsonant("종성")
// return 예시) true
$c.str.isFinalConsonant("입니다")
// return 예시) false
$c.str.isFinalConsonant("입니당")
// return 예시) true
 */  
	scwin.isFinalConsonant = function (str) {
		var code = str.charCodeAt(str.length - 1);
		if ((code < 44032) || (code > 55197)) {
			return false;
		}
		if ((code - 16) % 28 == 0) {
			return false;
		}
		return true;
	};
	
/**
 * @method
 * @name attachPostposition
 * @description 단어 뒤에 '은'이나 '는'을 붙여서 반환한다
 * @return <String>|변환된 문자열
 * @param <String>|str|은, 는 붙일 문자열 
 * @hidden N
 * @exception 
 * @sample $c.str.attachPostposition("나");
// return 예시)"나는"

$c.str.attachPostposition("나와 너");
// return 예시)"나와 너는"

$c.str.attachPostposition("그래서");
// return 예시)"그래서는"

$c.str.attachPostposition("그랬습니다만");
// return 예시)"그랬습니다만은"
 */  
	scwin.attachPostposition = function (str) {
		if (com.win.getLanguage("ko") === true) {
			if (scwin.isFinalConsonant(str)) {
				str = str + "은";
			} else {
				str = str + "는";
			}
			return str;
		} else {
			return str;
		}
	};
	
/**
 * @method
 * @name isBizID
 * @description 사업자번호 유효성을 검사한다
 * @return <Boolean>|정상이면 true, 비정상이면 false를 반환
 * @param <String>|str|사업자번호 문자열 
 * @hidden N
 * @exception 
 * @sample $c.str.isBizID("1102112345"); // false
$c.str.isBizID("1078616054"); // true
$c.str.isBizID("2208139938"); // true
$c.str.isBizID("1248100998"); // true
 */  
	scwin.isBizID = function (str) {
		var sum = 0;
		var aBizID = new Array(10);
		var checkID = new Array("1", "3", "7", "1", "3", "7", "1", "3", "5");
	
		for (var i = 0; i < 10; i++) {
			aBizID[i] = str.substring(i, i + 1);
		}
		
		for (var i = 0; i < 9; i++) {
			sum += aBizID[i] * checkID[i];
		}
		
		sum = sum + parseInt((aBizID[8] * 5) / 10);
		temp = sum % 10;
		temp1 = 0;
	
		if (temp != 0) {
			temp1 = 10 - temp;
		} else {
			temp1 = 0;
		}
		
		if (temp1 != aBizID[9]) {
			return false;
		}
		
		return true;
	};
	
/**
 * @method
 * @name isSSN
 * @description 내외국인 주민등록번호(외국인등록번호) 유효성을 검사한다
 * @return <Boolean>|정상이면 true, 비정상이면 false를 반환
 * @param <String>|str|주민등록번호(외국인등록번호) 문자열 
 * @hidden N
 * @exception 
 * @sample $c.str.isSSN("9701011234567");
 */  
	scwin.isSSN = function (str) {
		var checkID = new Array(2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5);
		var i = 0, sum = 0;
		var temp = 0;
		var yy = "";
	
		if (str.length != 13) {
			return false;
		}
		
		for (i = 0; i < 13; i++) {
			if (str.charAt(i) < '0' || str.charAt(i) > '9') {
				return false;
			}
		}
	
		// foreigner PersonID Pass
		if (str.substring(6, 13) == "5000000" || str.substring(6, 13) == "6000000" || str.substring(6, 13) == "7000000"
			|| str.substring(6, 13) == "8000000") {
			return true;
		}
		
		for (i = 0; i < 12; i++) {
			sum += str.charAt(i) * checkID[i];
		}
		
		temp = sum - Math.floor(sum / 11) * 11;
		temp = 11 - temp;
		temp = temp - Math.floor(temp / 10) * 10;
	
		// 나이 (-) 체크
		if (str.charAt(6) == '1' || str.charAt(6) == '2' || str.charAt(6) == '5' || str.charAt(6) == '6') {
			yy = "19";
		} else {
			yy = "20";
		}
	
		if (parseInt(com.date.getServerDateTime("yyyy")) - parseInt(yy + str.substring(0, 2)) < 0) {
			return false;
		}
	
		// 외국인 주민번호 체크로직 추가
		if (str.charAt(6) != '5' && str.charAt(6) != '6' && str.charAt(6) != '7' && str.charAt(6) != '8') {
			if (temp == com.num.parseInt(str.charAt(12))) {
				return true;
			} else {
				return false;
			}
		} else {
			if ((temp + 2) % 10 == com.num.parseInt(str.charAt(12))) {
				return true;
			} else {
				return false;
			}
		}
		
		return false;
	};
	
/**
 * @method
 * @name isEmail
 * @description 이메일 주소의 유효성을 검사한다
 * @return <Boolean>|정상이면 true, 비정상이면 false를 반환
 * @param <String>|str|메일주소 
 * @hidden N
 * @exception 
 * @sample $c.str.isEmail("emailTest@email.com");  // true
 */  
	scwin.isEmail = function (str) {
		if (typeof str != "undefined" && str != "") {
			var format = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
			if (format.test(str)) {
				return true;
			} else {
				return false;
			}
		}
		
		return true;
	};
	
	
/**
 * @method
 * @name isPhone
 * @description 전화번호의 유효성을 검사한다
 * @return <Boolean>|정상이면 true 그외는 false 반환
 * @param <String>|str|전화번호 
 * @hidden N
 * @exception 
 * @sample $c.str.isPhone("01094832134"); // true
$c.str.isPhone("02094832134"); // false
 */  
	scwin.isPhone = function(str) {
		try {
			var phoneNum = scwin.formatPhone(str);
			var isDash = (phoneNum.indexOf("-")>1);
			return isDash;
		} catch (ex) {
			console.error(exx);
			return false;
		}
	};
	
	
/**
 * @method
 * @name replaceAll
 * @description 자열을 치환한다
 * @return <String>|치환문자열
 * @param <String>|str|문자열
 * @param <String>|orgStr|검색할 문자
 * @param <String>|repStr|치환할 문자 
 * @hidden N
 * @exception 
 * @sample $c.str.replaceAll(obj.getValue(), "/", "");
 */  
	scwin.replaceAll = function( str, orgStr, repStr ){
		try {
			str = ""+str;
			return str.split(orgStr).join(repStr);
		} catch (ex) {
			console.error(ex);
			return str;
		}
	};
	
	
/**
 * @method
 * @name trim
 * @description 입력된 문자열의 좌우측 공백을 제거한 문자열을 구한다.
 * @return <String>|입력된 문자열에서 좌우측 공백이 제거된 문자열
 * @param <String>|str|좌우측 공백문자를 제거하려는 문자열 
 * @hidden N
 * @exception 
 * @sample $c.str.trim("   a   ");  // return "a"
 */  
	scwin.trim = function(str) {
		try {
			if (typeof str == "undefined" || str == null) {
				str ="";
			}
			if (typeof str !== "string") {
				str = str + "";
			}
			return str.trim();
		} catch (ex) {
			console.error(ex);
		}
	};
	
	
/**
 * @method
 * @name getByteLength
 * @description 문자열의 바이트 기준 문자열 길이를 반환한다
 * @return <Number>|문자열 길이
 * @param <String>|str|문자열
 * @param <String>|ignoreChar|길이 측정 시 무사할 문자열 
 * @hidden N
 * @exception 
 * @sample $c.str.getByteLength("1231aABC");  // 8
$c.str.getByteLength("1231a한글");  // 9
 */  
	scwin.getByteLength = function(str, ignoreChar) {
		return WebSquare.util.getStringByteSize(str, ignoreChar);
	};

 


}}}]}]},{T:1,N:'body'}]}]})