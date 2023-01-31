package project.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import project.backend.model.UserTypeModel;
import project.backend.service.UserTypeService;

@RestController
@CrossOrigin("*")
public class UserTypeController {

	@Autowired
	private UserTypeService userTypeService;

	@GetMapping("/getAllUserType")
	public Iterable<UserTypeModel> getAllUserTypes() {
		return userTypeService.getAllUserTypes();
	}

	@GetMapping("/getUserType/{id}")
	public Optional<UserTypeModel> getUserTypeById(@PathVariable Long id) {
		return userTypeService.getUserTypeById(id);
	}

	@PostMapping("/newUserType")
	public UserTypeModel create(@RequestBody UserTypeModel userType) {
		return userTypeService.createUserType(userType);
	}

	@PutMapping("/updateUserType/{id}")
	public Optional<UserTypeModel> update(@PathVariable Long id, @RequestBody UserTypeModel userType) {
		return userTypeService.updateUserType(id, userType);
	}

	@DeleteMapping("/deleteUserType/{id}")
	public String delete(@PathVariable Long id) {
		userTypeService.deleteUserType(id);
		return "UserType deleted";
	}
}
