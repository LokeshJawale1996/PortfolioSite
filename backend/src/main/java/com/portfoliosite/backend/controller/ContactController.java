package com.portfoliosite.backend.controller;

import com.portfoliosite.backend.dto.ContactRequest;
import com.portfoliosite.backend.entity.ContactMessage;
import com.portfoliosite.backend.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/contact")
public class ContactController {

  private final ContactService contactService;

  public ContactController(ContactService contactService) {
    this.contactService = contactService;
  }

  @PostMapping
  public ResponseEntity<Map<String, Object>> createContact(
      @Valid @RequestBody ContactRequest request) {

    ContactMessage savedMessage = contactService.saveContactMessage(request);

    Map<String, Object> response = new HashMap<>();

    response.put("success", true);
    response.put("message", "Thank you! Your message has been submitted successfully.");
    response.put("id", savedMessage.getId());

    return ResponseEntity
        .status(HttpStatus.CREATED)
        .body(response);
  }
}