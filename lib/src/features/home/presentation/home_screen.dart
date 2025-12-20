import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'home_navigation.dart';
import 'hero_section.dart';
import 'about_section.dart';
import 'experience_section.dart';
import 'education_section.dart';
import 'projects_section.dart';
import 'skills_section.dart';
import 'contact_section.dart';

class HomeScreen extends ConsumerWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final nav = ref.watch(homeNavigationProvider);

    return SingleChildScrollView(
      child: Column(
        children: [
          HeroSection(key: nav.heroKey),
          const AboutSection(),
          ExperienceSection(key: nav.experienceKey),
          EducationSection(key: nav.educationKey),
          ProjectsSection(key: nav.projectsKey),
          SkillsSection(key: nav.skillsKey),
          ContactSection(key: nav.contactKey),
        ],
      ),
    );
  }
}
