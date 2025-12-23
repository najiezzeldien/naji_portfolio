import 'package:flutter/material.dart';
import 'package:naji_portfolio/l10n/app_localizations.dart';

class Project {
  final String title;
  final String description;
  final String? appStoreUrl;
  final String? playStoreUrl;

  const Project({
    required this.title,
    required this.description,
    this.appStoreUrl,
    this.playStoreUrl,
  });

  static List<Project> getProjects(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    return [
      Project(
        title: l10n.projectTitleSanadCustomer,
        description: l10n.projectDescSanadCustomer,
        appStoreUrl: 'https://apps.apple.com/us/app/سنـد/id6749844909',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=ly.becom.sanadcustomers&hl=en',
      ),
      Project(
        title: l10n.projectTitleSanadMerchant,
        description: l10n.projectDescSanadMerchant,
        // Available on Sunmi Store only
      ),
      Project(
        title: l10n.projectTitleShinAljaw,
        description: l10n.projectDescShinAljaw,
        appStoreUrl: 'https://apps.apple.com/us/app/%D8%B4%D9%86-%D8%A7%D9%84%D8%AC%D9%88/id6503896230?platform=iphone',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ebtekar.shin_aljaw',
      ),
      Project(
        title: l10n.projectTitleLingo,
        description: l10n.projectDescLingo,
        appStoreUrl: 'https://apps.apple.com/us/app/lingo-%D9%84%D9%8A%D9%86%D9%82%D9%88/id1559887910',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ebtekar.lingo',
      ),
      Project(
        title: l10n.projectTitleOAnywhere,
        description: l10n.projectDescOAnywhere,
        appStoreUrl: 'https://apps.apple.com/sa/app/o-anywhere/id1599979909?l=ar',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.delmon.anyware',
      ),
      Project(
        title: l10n.projectTitleDMaintenance,
        description: l10n.projectDescDMaintenance,
        // Internal app - no public store links
      ),
    ];
  }
}