import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:intl/intl.dart' as intl;

import 'app_localizations_ar.dart';
import 'app_localizations_en.dart';

// ignore_for_file: type=lint

/// Callers can lookup localized strings with an instance of AppLocalizations
/// returned by `AppLocalizations.of(context)`.
///
/// Applications need to include `AppLocalizations.delegate()` in their app's
/// `localizationDelegates` list, and the locales they support in the app's
/// `supportedLocales` list. For example:
///
/// ```dart
/// import 'l10n/app_localizations.dart';
///
/// return MaterialApp(
///   localizationsDelegates: AppLocalizations.localizationsDelegates,
///   supportedLocales: AppLocalizations.supportedLocales,
///   home: MyApplicationHome(),
/// );
/// ```
///
/// ## Update pubspec.yaml
///
/// Please make sure to update your pubspec.yaml to include the following
/// packages:
///
/// ```yaml
/// dependencies:
///   # Internationalization support.
///   flutter_localizations:
///     sdk: flutter
///   intl: any # Use the pinned version from flutter_localizations
///
///   # Rest of dependencies
/// ```
///
/// ## iOS Applications
///
/// iOS applications define key application metadata, including supported
/// locales, in an Info.plist file that is built into the application bundle.
/// To configure the locales supported by your app, you’ll need to edit this
/// file.
///
/// First, open your project’s ios/Runner.xcworkspace Xcode workspace file.
/// Then, in the Project Navigator, open the Info.plist file under the Runner
/// project’s Runner folder.
///
/// Next, select the Information Property List item, select Add Item from the
/// Editor menu, then select Localizations from the pop-up menu.
///
/// Select and expand the newly-created Localizations item then, for each
/// locale your application supports, add a new item and select the locale
/// you wish to add from the pop-up menu in the Value field. This list should
/// be consistent with the languages listed in the AppLocalizations.supportedLocales
/// property.
abstract class AppLocalizations {
  AppLocalizations(String locale)
    : localeName = intl.Intl.canonicalizedLocale(locale.toString());

  final String localeName;

  static AppLocalizations? of(BuildContext context) {
    return Localizations.of<AppLocalizations>(context, AppLocalizations);
  }

  static const LocalizationsDelegate<AppLocalizations> delegate =
      _AppLocalizationsDelegate();

  /// A list of this localizations delegate along with the default localizations
  /// delegates.
  ///
  /// Returns a list of localizations delegates containing this delegate along with
  /// GlobalMaterialLocalizations.delegate, GlobalCupertinoLocalizations.delegate,
  /// and GlobalWidgetsLocalizations.delegate.
  ///
  /// Additional delegates can be added by appending to this list in
  /// MaterialApp. This list does not have to be used at all if a custom list
  /// of delegates is preferred or required.
  static const List<LocalizationsDelegate<dynamic>> localizationsDelegates =
      <LocalizationsDelegate<dynamic>>[
        delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ];

  /// A list of this localizations delegate's supported locales.
  static const List<Locale> supportedLocales = <Locale>[
    Locale('ar'),
    Locale('en'),
  ];

  /// No description provided for @aboutMe.
  ///
  /// In en, this message translates to:
  /// **'About Me'**
  String get aboutMe;

  /// No description provided for @home.
  ///
  /// In en, this message translates to:
  /// **'Home'**
  String get home;

  /// No description provided for @education.
  ///
  /// In en, this message translates to:
  /// **'Education'**
  String get education;

  /// No description provided for @projects.
  ///
  /// In en, this message translates to:
  /// **'Projects'**
  String get projects;

  /// No description provided for @contact.
  ///
  /// In en, this message translates to:
  /// **'Contact'**
  String get contact;

  /// No description provided for @name.
  ///
  /// In en, this message translates to:
  /// **'Naji Ezzeldien'**
  String get name;

  /// No description provided for @role.
  ///
  /// In en, this message translates to:
  /// **'Flutter Developer'**
  String get role;

  /// No description provided for @intro.
  ///
  /// In en, this message translates to:
  /// **'I build beautiful and functional cross-platform applications.'**
  String get intro;

  /// No description provided for @skills.
  ///
  /// In en, this message translates to:
  /// **'Skills'**
  String get skills;

  /// No description provided for @experience.
  ///
  /// In en, this message translates to:
  /// **'Experience'**
  String get experience;

  /// No description provided for @downloadCV.
  ///
  /// In en, this message translates to:
  /// **'Download CV'**
  String get downloadCV;

  /// No description provided for @email.
  ///
  /// In en, this message translates to:
  /// **'Email'**
  String get email;

  /// No description provided for @phone.
  ///
  /// In en, this message translates to:
  /// **'Phone'**
  String get phone;

  /// No description provided for @linkedIn.
  ///
  /// In en, this message translates to:
  /// **'LinkedIn'**
  String get linkedIn;

  /// No description provided for @gitHub.
  ///
  /// In en, this message translates to:
  /// **'GitHub'**
  String get gitHub;

  /// No description provided for @description.
  ///
  /// In en, this message translates to:
  /// **'Portfolio Description'**
  String get description;

  /// No description provided for @helloIAm.
  ///
  /// In en, this message translates to:
  /// **'Hello, I am'**
  String get helloIAm;

  /// No description provided for @mobileAppsEngineer.
  ///
  /// In en, this message translates to:
  /// **'Mobile Applications Engineer'**
  String get mobileAppsEngineer;

  /// No description provided for @heroDescription.
  ///
  /// In en, this message translates to:
  /// **'Building high-performance, scalable mobile applications with exceptional user experiences.'**
  String get heroDescription;

  /// No description provided for @aboutMeDescription.
  ///
  /// In en, this message translates to:
  /// **'Highly driven Mobile Applications Engineer with over 4 years of expertise in crafting user-focused applications for both Android and iOS platforms utilizing the Flutter framework. I have successfully deployed 6 applications to Google Play, the Apple App Store, and the Sunmi store, accumulating over 27,000 downloads.'**
  String get aboutMeDescription;

  /// No description provided for @coreStrengths.
  ///
  /// In en, this message translates to:
  /// **'Core Strengths'**
  String get coreStrengths;

  /// No description provided for @coreStrengthsList.
  ///
  /// In en, this message translates to:
  /// **'• Developing scalable, secure, and maintainable mobile applications\n• Architecting solutions using Clean Architecture and Clean Code principles\n• Advanced state management (Riverpod, Bloc) and dependency injection patterns\n• Integrating complex features: payment gateways, Firebase services, real-time communication, hardware integration\n• Building responsive, localized applications with exceptional user experiences'**
  String get coreStrengthsList;

  /// No description provided for @educationTitle.
  ///
  /// In en, this message translates to:
  /// **'Education'**
  String get educationTitle;

  /// No description provided for @masterDegree.
  ///
  /// In en, this message translates to:
  /// **'Master in Information Technology'**
  String get masterDegree;

  /// No description provided for @masterSchool.
  ///
  /// In en, this message translates to:
  /// **'University of Sciences and Technology, Omdurman, Sudan'**
  String get masterSchool;

  /// No description provided for @masterDate.
  ///
  /// In en, this message translates to:
  /// **'October 2018'**
  String get masterDate;

  /// No description provided for @masterDescription.
  ///
  /// In en, this message translates to:
  /// **'Thesis focused on data mining in economics, involving collection and analysis of public opinions on the Sudanese economy from Twitter. Utilized RapidMiner Studio for data classification.'**
  String get masterDescription;

  /// No description provided for @bachelorDegree.
  ///
  /// In en, this message translates to:
  /// **'Bachelor of Computer Sciences'**
  String get bachelorDegree;

  /// No description provided for @bachelorSchool.
  ///
  /// In en, this message translates to:
  /// **'University of Sciences and Technology, Omdurman, Sudan'**
  String get bachelorSchool;

  /// No description provided for @bachelorDate.
  ///
  /// In en, this message translates to:
  /// **'October 2015'**
  String get bachelorDate;

  /// No description provided for @bachelorDescription.
  ///
  /// In en, this message translates to:
  /// **'Final project: Developed an Android mobile application using Java for voice calls over Wi-Fi Direct between two Android devices.'**
  String get bachelorDescription;

  /// No description provided for @featuredProjects.
  ///
  /// In en, this message translates to:
  /// **'Featured Projects'**
  String get featuredProjects;

  /// No description provided for @projectsSubtitle.
  ///
  /// In en, this message translates to:
  /// **'A selection of apps I have built.'**
  String get projectsSubtitle;

  /// No description provided for @projectTitleSanadCustomer.
  ///
  /// In en, this message translates to:
  /// **'Sanad Customer'**
  String get projectTitleSanadCustomer;

  /// No description provided for @projectDescSanadCustomer.
  ///
  /// In en, this message translates to:
  /// **'Comprehensive E-Commerce platform for digital recharge vouchers and card products for telecommunication services in Libya. Features payment gateway integration, wallet management, QR code generation, and real-time notifications.'**
  String get projectDescSanadCustomer;

  /// No description provided for @projectTitleSanadMerchant.
  ///
  /// In en, this message translates to:
  /// **'Sanad Merchant'**
  String get projectTitleSanadMerchant;

  /// No description provided for @projectDescSanadMerchant.
  ///
  /// In en, this message translates to:
  /// **'Merchant application empowering vendors to sell and print recharge vouchers for local and international telecommunication providers. Integrated with Sunmi POS devices for native printing.'**
  String get projectDescSanadMerchant;

  /// No description provided for @projectTitleShinAljaw.
  ///
  /// In en, this message translates to:
  /// **'Shin Aljaw'**
  String get projectTitleShinAljaw;

  /// No description provided for @projectDescShinAljaw.
  ///
  /// In en, this message translates to:
  /// **'Full-featured weather application offering real-time conditions, natural events, and latest weather updates. Supports trip planning, seasonal activity tracking (planting, harvesting), and detailed marine conditions.'**
  String get projectDescShinAljaw;

  /// No description provided for @projectTitleLingo.
  ///
  /// In en, this message translates to:
  /// **'Lingo'**
  String get projectTitleLingo;

  /// No description provided for @projectDescLingo.
  ///
  /// In en, this message translates to:
  /// **'Educational platform with live lesson broadcasting (audio & video) using Agora Interactive Live Streaming. Features real-time communication, multimedia playback, and personalized learning paths.'**
  String get projectDescLingo;

  /// No description provided for @projectTitleOAnywhere.
  ///
  /// In en, this message translates to:
  /// **'Office Anywhere (O-Anywhere)'**
  String get projectTitleOAnywhere;

  /// No description provided for @projectDescOAnywhere.
  ///
  /// In en, this message translates to:
  /// **'Internal utility application designed to streamline task management and communication across all company departments. Serving real estate companies in Saudi Arabia.'**
  String get projectDescOAnywhere;

  /// No description provided for @projectTitleDMaintenance.
  ///
  /// In en, this message translates to:
  /// **'D-Maintenance'**
  String get projectTitleDMaintenance;

  /// No description provided for @projectDescDMaintenance.
  ///
  /// In en, this message translates to:
  /// **'Customer-focused mobile application enabling efficient submission of maintenance requests, feedback, suggestions, and service evaluations for real estate management.'**
  String get projectDescDMaintenance;

  /// No description provided for @experienceSubtitle.
  ///
  /// In en, this message translates to:
  /// **'My professional journey.'**
  String get experienceSubtitle;

  /// No description provided for @expCompanyBecom.
  ///
  /// In en, this message translates to:
  /// **'Becom بِكُمْ Company'**
  String get expCompanyBecom;

  /// No description provided for @expRoleBecom.
  ///
  /// In en, this message translates to:
  /// **'Flutter Engineer'**
  String get expRoleBecom;

  /// No description provided for @expDateBecom.
  ///
  /// In en, this message translates to:
  /// **'March 2025 - Present'**
  String get expDateBecom;

  /// No description provided for @expLocBecom.
  ///
  /// In en, this message translates to:
  /// **'Tripoli - Libya'**
  String get expLocBecom;

  /// No description provided for @expDescBecom.
  ///
  /// In en, this message translates to:
  /// **'Becom is a Fin-Tech firm delivering integrated software solutions for payment and e-commerce. Full lifecycle development of mobile applications for Android and iOS, encompassing new application creation, feature implementation, and bug resolution in existing solutions.'**
  String get expDescBecom;

  /// No description provided for @expCompanyEbtekar.
  ///
  /// In en, this message translates to:
  /// **'Ebtekar Information Systems Company'**
  String get expCompanyEbtekar;

  /// No description provided for @expRoleEbtekar.
  ///
  /// In en, this message translates to:
  /// **'Flutter Engineer'**
  String get expRoleEbtekar;

  /// No description provided for @expDateEbtekar.
  ///
  /// In en, this message translates to:
  /// **'August 2023 - December 2024'**
  String get expDateEbtekar;

  /// No description provided for @expLocEbtekar.
  ///
  /// In en, this message translates to:
  /// **'Tripoli - Libya'**
  String get expLocEbtekar;

  /// No description provided for @expDescEbtekar.
  ///
  /// In en, this message translates to:
  /// **'Ebtekar Information Systems Company (EISC) is a full-service agency specializing in planning and delivering effective, innovative media and technology solutions for domestic and international clients. Full lifecycle development of mobile applications for Android and iOS.'**
  String get expDescEbtekar;

  /// No description provided for @expCompanyMIC.
  ///
  /// In en, this message translates to:
  /// **'Management Intelligence Company'**
  String get expCompanyMIC;

  /// No description provided for @expRoleMIC.
  ///
  /// In en, this message translates to:
  /// **'Flutter Engineer'**
  String get expRoleMIC;

  /// No description provided for @expDateMIC.
  ///
  /// In en, this message translates to:
  /// **'November 2019 - March 2022'**
  String get expDateMIC;

  /// No description provided for @expLocMIC.
  ///
  /// In en, this message translates to:
  /// **'Riyadh - Saudi Arabia'**
  String get expLocMIC;

  /// No description provided for @expDescMIC.
  ///
  /// In en, this message translates to:
  /// **'Management Intelligence Company (MIC) is a startup software firm specializing in building web systems and mobile applications tailored for the Saudi market. Full lifecycle development of mobile applications and backend development contributions using ASP.NET Core Web API.'**
  String get expDescMIC;

  /// No description provided for @getInTouch.
  ///
  /// In en, this message translates to:
  /// **'Get in Touch'**
  String get getInTouch;

  /// No description provided for @contactSubtitle.
  ///
  /// In en, this message translates to:
  /// **'Have a project in mind? Let\'s work together.'**
  String get contactSubtitle;

  /// No description provided for @copyright.
  ///
  /// In en, this message translates to:
  /// **'© 2025 Naji Ezzeldien. All rights reserved.'**
  String get copyright;

  /// No description provided for @skillPaymentGateway.
  ///
  /// In en, this message translates to:
  /// **'Payment Gateway Integration'**
  String get skillPaymentGateway;

  /// No description provided for @skillHardware.
  ///
  /// In en, this message translates to:
  /// **'Hardware Integration'**
  String get skillHardware;

  /// No description provided for @skillRealTime.
  ///
  /// In en, this message translates to:
  /// **'Real-time Communication (WebSocket, Socket.io)'**
  String get skillRealTime;

  /// No description provided for @skillPushNotifications.
  ///
  /// In en, this message translates to:
  /// **'Push Notifications'**
  String get skillPushNotifications;

  /// No description provided for @skillResponsiveUI.
  ///
  /// In en, this message translates to:
  /// **'Responsive UI Design'**
  String get skillResponsiveUI;

  /// No description provided for @skillLocalization.
  ///
  /// In en, this message translates to:
  /// **'Localization'**
  String get skillLocalization;

  /// No description provided for @skillQRCode.
  ///
  /// In en, this message translates to:
  /// **'QR Code Generation/Scanning'**
  String get skillQRCode;

  /// No description provided for @skillCleanArch.
  ///
  /// In en, this message translates to:
  /// **'Clean Architecture'**
  String get skillCleanArch;

  /// No description provided for @skillCleanCode.
  ///
  /// In en, this message translates to:
  /// **'Clean Code'**
  String get skillCleanCode;

  /// No description provided for @skillSolid.
  ///
  /// In en, this message translates to:
  /// **'SOLID Principles'**
  String get skillSolid;

  /// No description provided for @skillDesignPatterns.
  ///
  /// In en, this message translates to:
  /// **'Design Patterns'**
  String get skillDesignPatterns;

  /// No description provided for @skillDataStructures.
  ///
  /// In en, this message translates to:
  /// **'Data Structures'**
  String get skillDataStructures;

  /// No description provided for @skillAlgorithms.
  ///
  /// In en, this message translates to:
  /// **'Algorithms'**
  String get skillAlgorithms;
}

class _AppLocalizationsDelegate
    extends LocalizationsDelegate<AppLocalizations> {
  const _AppLocalizationsDelegate();

  @override
  Future<AppLocalizations> load(Locale locale) {
    return SynchronousFuture<AppLocalizations>(lookupAppLocalizations(locale));
  }

  @override
  bool isSupported(Locale locale) =>
      <String>['ar', 'en'].contains(locale.languageCode);

  @override
  bool shouldReload(_AppLocalizationsDelegate old) => false;
}

AppLocalizations lookupAppLocalizations(Locale locale) {
  // Lookup logic when only language code is specified.
  switch (locale.languageCode) {
    case 'ar':
      return AppLocalizationsAr();
    case 'en':
      return AppLocalizationsEn();
  }

  throw FlutterError(
    'AppLocalizations.delegate failed to load unsupported locale "$locale". This is likely '
    'an issue with the localizations generation tool. Please file an issue '
    'on GitHub with a reproducible sample app and the gen-l10n configuration '
    'that was used.',
  );
}
