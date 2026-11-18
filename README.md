# WENARE — adresse historique

Ce dépôt est uniquement le point d’entrée de compatibilité de l’application.

- Adresse historique : https://timetogrowup.github.io/WENARE/
- Application actuelle : https://timetogrowup.github.io/P-123-wenare/
- Dépôt de l’application : https://github.com/timetogrowup/P-123-wenare
- Sources et suivi : dépôt privé P-124-wenare-source.

Publication GitHub Pages : branche main, dossier racine.

index.html redirige avec location.replace en conservant les paramètres et le fragment ; une balise meta et un lien servent de repli. 404.html couvre les anciens liens profonds en ramenant à l’accueil actuel. sw.js remplace l’ancien service worker à son prochain contrôle en ligne, se désinscrit et redirige les fenêtres qu’il contrôle ; aucun cache partagé de l’origine n’est supprimé. Les installations restées hors connexion peuvent conserver l’ancienne interface jusqu’à leur prochaine mise à jour.

Conserver le nom technique WENARE de ce dépôt pour préserver l’ancienne URL. La numérotation P-123 du dépôt applicatif reste inchangée.
