package com.inswave.edu.service;

import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;

public interface EmployessService {

	List selectEmployessList(Map sParam) throws Exception;

	Map saveEmployessList(List sList) throws Exception;

	int insertEmployess(Map item) throws Exception;
	int updateEmployess(Map item) throws Exception;
	int deleteEmployess(Map item) throws Exception;
}

