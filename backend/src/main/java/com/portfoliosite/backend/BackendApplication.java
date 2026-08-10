package com.portfoliosite.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner startupMessage() {
		return args -> {
			System.out.println();
			System.out.println("==========================================");
			System.out.println("          PortfolioSite API");
			System.out.println("          Welcome, Lokesh!");
			System.out.println("          Backend is running 🚀");
			System.out.println("==========================================");
			System.out.println();
		};
	}
}