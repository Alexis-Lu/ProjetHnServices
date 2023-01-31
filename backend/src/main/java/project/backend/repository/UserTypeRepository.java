package project.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import project.backend.model.UserTypeModel;

@Repository
public interface UserTypeRepository extends CrudRepository<UserTypeModel, Long> {

}
