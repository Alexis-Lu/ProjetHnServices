package project.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import project.backend.model.UserModel;

@Repository
public interface UserRepository extends CrudRepository<UserModel, Long> {

}
