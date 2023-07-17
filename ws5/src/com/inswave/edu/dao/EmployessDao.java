package com.inswave.edu.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("employessDao")
public class EmployessDao {
	@Autowired
	private SqlSession sqlSession;
	
	private static final String NS = "com.inswave.edu.dao.EmployessDao.";

	public List selectEmployessList(Map param) throws Exception{
		return sqlSession.selectList(NS + "selectEmployessList", param);
	}
	
	public int insertEmployess(Map item) throws Exception {
		return sqlSession.insert(NS+"insertEmployess", item);
	}

	public int updateEmployess(Map item) throws Exception {
		return sqlSession.insert(NS+"updateEmployess", item);
	}

	public int deleteEmployess(Map item) throws Exception {
		return sqlSession.insert(NS+"deleteEmployess", item);
	}
}
