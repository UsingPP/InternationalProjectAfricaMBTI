# Generated by Django 4.2.10 on 2024-02-26 05:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0002_question_is_int"),
    ]

    operations = [
        migrations.RenameField(
            model_name="question",
            old_name="is_int",
            new_name="survey_type",
        ),
    ]
