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

import project.backend.model.UserModel;
import project.backend.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/getAllUsers")
	public Iterable<UserModel> getAllUsers() {
		return userService.getAllUser();
	}

	@GetMapping("/getUser/{id}")
	public Optional<UserModel> getUserById(@PathVariable Long id) {
		return userService.getUserById(id);
	}

	@PostMapping("/newUser")
	public UserModel create(@RequestBody UserModel user) {
		return userService.createUser(user);
	}

	@PutMapping("/updateUser/{id}")
	public Optional<UserModel> update(@PathVariable Long id, @RequestBody UserModel user) {
		return userService.updateUser(id, user);
	}

	@DeleteMapping("/deleteUser/{id}")
	public String delete(@PathVariable Long id) {
		userService.deleteUser(id);
		return "User deleted";
	}
}
