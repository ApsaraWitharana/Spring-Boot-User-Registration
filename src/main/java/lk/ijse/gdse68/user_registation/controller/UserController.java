package lk.ijse.gdse68.user_registation.controller;

import lk.ijse.gdse68.user_registation.entity.User;
import lk.ijse.gdse68.user_registation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/savepost")
    public void savePost(@RequestBody User user){
       userRepository.save(user);
    }

    @PutMapping("/updatepost")
    public User updatePost(@RequestBody User user){
        return userRepository.save(user);
    }

}
