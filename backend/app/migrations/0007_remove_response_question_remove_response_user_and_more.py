# Generated by Django 4.2.10 on 2024-03-07 12:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0006_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="response",
            name="question",
        ),
        migrations.RemoveField(
            model_name="response",
            name="user",
        ),
        migrations.DeleteModel(
            name="Question",
        ),
        migrations.DeleteModel(
            name="Response",
        ),
        migrations.DeleteModel(
            name="Survey",
        ),
        migrations.DeleteModel(
            name="User",
        ),
    ]
