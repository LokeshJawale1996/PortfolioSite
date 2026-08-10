package com.portfoliosite.backend.repository;

import com.portfoliosite.backend.entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactMessageRepository
    extends JpaRepository<ContactMessage, Long> {
}