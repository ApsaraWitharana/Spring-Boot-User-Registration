package lk.ijse.gdse68.user_registation.repository;

import lk.ijse.gdse68.user_registation.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
}
