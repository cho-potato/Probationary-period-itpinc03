package com.inswave.edu.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.inswave.edu.service.EmployessService;
import com.inswave.edu.util.EduUtils;

@RestController
public class EmployessController {
	private static final Logger LOGGER = Logger.getLogger("webApp");
	
	@Resource(name = "employessService")
	private EmployessService employessService;
	
	/**
	 * <pre>
	 * 사원 정보 조회
	 * @param param
	 * @return
	 * @throws Exception
	 * </pre>
	 */
	@RequestMapping(value = "/employess/selectEmployessList.do", method = RequestMethod.POST)
	public Map selectEmployessList(@RequestBody Map param) throws Exception {
		Map resObj = new HashMap();
		Map sParam = null;
		try {
			sParam = (Map)param.get("dc_reqParam");
			
			
			resObj.put("dc_employessList", employessService.selectEmployessList(param));

			resObj.put("msg", "조회가 완료되었습니다.");
			resObj.put("msgCode", "S");
		} catch (Exception ex) {
			ex.printStackTrace();
			resObj = EduUtils.setErrorMessage(resObj);
		}
		
		return resObj;
	}
	
	/**
	 * <pre>
	 * 사원 정보 저장
	 * @param param
	 * @return
	 * @throws Exception
	 * </pre>
	 */
	@RequestMapping(value = "/employess/saveEmployessList.do", method = RequestMethod.POST)
	public Map saveEmployessList(@RequestBody Map param) throws Exception {
		Map resObj = new HashMap();
		try {
			List sList = (List) param.get("dml_employessList");
			
			System.out.println(">>>>>>sList="+sList);
			
			employessService.saveEmployessList(sList);
			
			resObj.put("msg", "조회가 완료되었습니다.");
			resObj.put("msgCode", "S");
		} catch (Exception ex) {
			ex.printStackTrace();
			resObj = EduUtils.setErrorMessage(resObj);
		}
		
		return resObj;
	}
	
}
