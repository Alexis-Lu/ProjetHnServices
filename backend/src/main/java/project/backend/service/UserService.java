package project.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Data;
import project.backend.model.UserModel;
import project.backend.repository.UserRepository;

@Data
@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public Optional<UserModel> getUserById(final Long id) {
		return userRepository.findById(id);
	}

	public Iterable<UserModel> getAllUser() {
		return userRepository.findAll();
	}

	public String deleteUser(final Long id) {
		userRepository.deleteById(id);
		return null;
	}

	public UserModel createUser(UserModel user) {
		return userRepository.save(user);
	}

	public Optional<UserModel> updateUser(final Long id, UserModel user) {

		return userRepository.findById(id).map(e -> {
			e.setUserType(user.getUserType());
			e.setName(user.getName());
			e.setFirstname(user.getFirstname());
			e.setEmail(user.getEmail());
			return userRepository.save(e);
		});
	}
}
