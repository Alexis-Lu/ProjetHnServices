package project.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Data;
import project.backend.model.UserTypeModel;
import project.backend.repository.UserTypeRepository;

@Data
@Service
public class UserTypeService {

	@Autowired
	private UserTypeRepository userTypeRepository;

	public Optional<UserTypeModel> getUserTypeById(final Long id) {
		return userTypeRepository.findById(id);

	}

	public Iterable<UserTypeModel> getAllUserTypes() {
		return userTypeRepository.findAll();
	}

	public String deleteUserType(final Long id) {
		userTypeRepository.deleteById(id);
		return null;
	}

	public UserTypeModel createUserType(UserTypeModel userType) {
		return userTypeRepository.save(userType);
	}

	public Optional<UserTypeModel> updateUserType(final Long id, UserTypeModel userType) {
		return userTypeRepository.findById(id).map(e -> {
			e.setName(userType.getName());
			return userTypeRepository.save(e);
		});

	}
}
