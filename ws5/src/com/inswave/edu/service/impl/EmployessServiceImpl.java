package com.inswave.edu.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

import com.inswave.edu.dao.EmployessDao;
import com.inswave.edu.service.EmployessService;


@Service(value="employessService")
public class EmployessServiceImpl implements EmployessService {
	@Resource(name="employessDao")
	private EmployessDao employessDao;
	
	@Override
	public List selectEmployessList(Map sParam)  throws Exception{
		return employessDao.selectEmployessList(sParam);
	}

	@Override
	public Map saveEmployessList(List sList)  throws Exception{
		Map resObj = new HashMap();
		
		int totalCnt = sList.size();
		
		System.out.println("넘겨받은 총 건수 : " + totalCnt + "건");
		
		for(int i=0; i<totalCnt; i++) {
			Map rowData = (Map) sList.get(i);
			String rowStatus = (String) rowData.get("rowStatus");
			
			if(rowStatus.equals("C")) {
				System.out.println("입력 : " + rowData.toString());
				insertEmployess(rowData);
			}else if(rowStatus.equals("U")){
				System.out.println("수정 : " + rowData.toString());
				updateEmployess(rowData);
			}else if(rowStatus.equals("D") || rowStatus.equals("E")){
				System.out.println("삭제 : " + rowData.toString());
				deleteEmployess(rowData);
			}
		}
		
		
		return null;
	}

	@Override
	public int insertEmployess (Map item) throws Exception {
		return employessDao.insertEmployess(item);
		
	}
	
	@Override
	public int updateEmployess (Map item) throws Exception {
		return employessDao.updateEmployess(item);
		
	}
	
	@Override
	public int deleteEmployess (Map item) throws Exception {
		return employessDao.deleteEmployess(item);
		
	}
}
