package com.portfoliosite.backend.service;

import com.portfoliosite.backend.dto.ContactRequest;
import com.portfoliosite.backend.entity.ContactMessage;
import com.portfoliosite.backend.repository.ContactMessageRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class ContactService {

  private final ContactMessageRepository contactMessageRepository;

  public ContactService(
      ContactMessageRepository contactMessageRepository) {
    this.contactMessageRepository = contactMessageRepository;
  }

  @Transactional
  public ContactMessage saveContactMessage(ContactRequest request) {

    ContactMessage contactMessage = new ContactMessage();

    contactMessage.setName(request.getName().trim());
    contactMessage.setEmail(request.getEmail().trim());
    contactMessage.setMobileNumber(
        request.getMobileNumber() != null
            ? request.getMobileNumber().trim()
            : null);
    contactMessage.setSubject(request.getSubject().trim());
    contactMessage.setMessage(request.getMessage().trim());

    contactMessage.setStatus("NEW");
    contactMessage.setCreatedAt(LocalDateTime.now());

    return contactMessageRepository.save(contactMessage);
  }
}