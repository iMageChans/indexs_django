from django.db import models


class Transfer(models.Model):
    event_id = models.CharField(max_length=255, primary_key=True)
    block_number = models.IntegerField()
    block_hash = models.CharField(max_length=255)
    timestamp = models.DateTimeField()
    extrinsic_hash = models.CharField(max_length=255)
    from_address = models.CharField(max_length=255)
    to_address = models.CharField(max_length=255)
    d9 = models.CharField(max_length=255)
    usdt = models.CharField(max_length=255)
    fee = models.CharField(max_length=255)
    actions = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.event_id}"


class GreenPointTransfer(models.Model):
    event_id = models.CharField(max_length=255, primary_key=True)
    block_number = models.IntegerField()
    block_hash = models.CharField(max_length=255)
    timestamp = models.DateTimeField()
    extrinsic_hash = models.CharField(max_length=255)
    from_address = models.CharField(max_length=255)
    to_address = models.CharField(max_length=255)
    merchant_points = models.CharField(max_length=255)
    consumer_points = models.CharField(max_length=255)
    fee = models.CharField(max_length=255)
    actions = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.event_id}"


class SwapTransfer(models.Model):
    event_id = models.CharField(max_length=255, primary_key=True)
    block_number = models.IntegerField()
    block_hash = models.CharField(max_length=255)
    timestamp = models.DateTimeField()
    extrinsic_hash = models.CharField(max_length=255)
    from_address = models.CharField(max_length=255)
    to_address = models.CharField(max_length=255)
    d9 = models.CharField(max_length=255)
    usdt = models.CharField(max_length=255)
    fee = models.CharField(max_length=255)
    actions = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.event_id}"
