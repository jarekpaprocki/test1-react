[
    {
        "identifier": "basket",
        "name": {
            "strings": {
                "en": "Basket",
                "fr": "Panier",
                "nl": "Mandje"
            }
        },
        "superType": "media",
        "traits": [],
        "fields": [
            {
                "identifier": "basketItems",
                "fieldType": "set<item>",
                "name": {
                    "strings": {
                        "en": "Basket items"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            }
        ]
    },
    {
        "identifier": "image",
        "name": {
            "strings": {
                "en": "Image",
                "fr": "Image",
                "nl": "Afbeelding"
            }
        },
        "superType": "media",
        "traits": [],
        "fields": [
            {
                "identifier": "dpi",
                "fieldType": "integer",
                "name": {
                    "strings": {
                        "en": "dpi"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            }
        ]
    },
    {
        "identifier": "item",
        "name": {
            "strings": {
                "en": "Item",
                "fr": "Item",
                "nl": "Item"
            }
        },
        "traits": [],
        "fields": [
            {
                "identifier": "creationUser",
                "fieldType": "user",
                "name": {
                    "strings": {
                        "en": "Creation user"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "deleted",
                "fieldType": "boolean",
                "name": {
                    "strings": {
                        "en": "Deleted"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "defaultValue": false,
                "constraints": [
                    {
                        "$type": "RequiredConstraint"
                    }
                ]
            },
            {
                "identifier": "modificationUser",
                "fieldType": "user",
                "name": {
                    "strings": {
                        "en": "Modification user"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "name",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "en": "Name"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "typeHierarchy",
                "fieldType": "set<string>",
                "fieldComputer": "typeHierarchy",
                "name": {
                    "strings": {
                        "en": "Type hierarchy"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": true,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "tenant",
                "fieldType": "uuid",
                "name": {
                    "strings": {
                        "en": "Tenant"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            }
        ]
    },
    {
        "identifier": "document",
        "name": {
            "strings": {
                "en": "Document",
                "fr": "Document",
                "nl": "Document"
            }
        },
        "superType": "media",
        "traits": [],
        "fields": []
    },
    {
        "identifier": "batch",
        "name": {
            "strings": {
                "en": "Batch",
                "fr": "Album",
                "nl": "Album"
            }
        },
        "superType": "media",
        "traits": [],
        "fields": [
            {
                "identifier": "batchItems",
                "fieldType": "set<item>",
                "name": {
                    "strings": {
                        "en": "Batch items"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            }
        ]
    },
    {
        "identifier": "collection",
        "name": {
            "strings": {
                "en": "Collection"
            }
        },
        "superType": "item",
        "traits": [],
        "fields": []
    },
    {
        "identifier": "media",
        "name": {
            "strings": {
                "en": "Legacy Media Type",
                "fr": "Legacy Media Type",
                "nl": "Legacy Media Type"
            }
        },
        "superType": "item",
        "traits": [
            "tags.custom"
        ],
        "fields": [
            {
                "identifier": "date",
                "fieldType": "date",
                "name": {
                    "strings": {
                        "en": "IPTC Date"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "country",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "en": "IPTC Country"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "keywords",
                "fieldType": "set<string>",
                "name": {
                    "strings": {
                        "en": "Keywords",
                        "fr": "Mots-clés",
                        "nl": "Trefwoorden"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "city",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "en": "IPTC City"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "fileUTI",
                "fieldType": "set<string>",
                "fieldComputer": "uti",
                "name": {
                    "strings": {
                        "en": "UTI"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "fullText",
                "fieldType": "blob",
                "name": {
                    "strings": {
                        "en": "Text"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "caption",
                "fieldType": "analyzed_string",
                "name": {
                    "strings": {
                        "en": "Caption"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "representedBy",
                "fieldType": "item",
                "name": {
                    "strings": {
                        "en": "Represented by"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "source",
                "fieldType": "analyzed_string",
                "name": {
                    "strings": {
                        "en": "Source"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "title",
                "fieldType": "analyzed_string",
                "name": {
                    "strings": {
                        "en": "Title"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "stocks",
                "fieldType": "set<item>",
                "name": {
                    "strings": {
                        "en": "Stocks"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "parentFolder",
                "fieldType": "item",
                "name": {
                    "strings": {
                        "en": "Parent"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "file",
                "fieldType": "file",
                "name": {
                    "strings": {
                        "en": "File"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "previewDate",
                "fieldType": "date",
                "name": {
                    "strings": {
                        "en": "Preview Date"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "collections",
                "fieldType": "set<item>",
                "name": {
                    "strings": {
                        "en": "Collections"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "credit",
                "fieldType": "analyzed_string",
                "name": {
                    "strings": {
                        "en": "IPTC Credit"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "height",
                "fieldType": "integer",
                "name": {
                    "strings": {
                        "en": "Height"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "indexed_fulltext",
                "fieldType": "analyzed_string",
                "fieldComputer": "fulltext",
                "name": {
                    "strings": {
                        "en": "Indexed fulltext"
                    }
                },
                "indexed": true,
                "stored": false,
                "readOnly": false,
                "serverSide": true,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "byLine",
                "fieldType": "analyzed_string",
                "name": {
                    "strings": {
                        "en": "IPTC ByLine"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "previewRatio",
                "fieldType": "float",
                "name": {
                    "strings": {
                        "en": "Preview ratio"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "length",
                "fieldType": "integer",
                "name": {
                    "strings": {
                        "en": "Length"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "creationDate",
                "fieldType": "date",
                "name": {
                    "strings": {
                        "en": "Creation Date"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "derivedFiles",
                "fieldType": "set<file>",
                "name": {
                    "strings": {
                        "en": "Derived files"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "modificationDate",
                "fieldType": "date",
                "name": {
                    "strings": {
                        "en": "Modification Date"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "specialInstructions",
                "fieldType": "analyzed_string",
                "name": {
                    "strings": {
                        "en": "IPTC Special instructions"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "width",
                "fieldType": "integer",
                "name": {
                    "strings": {
                        "en": "Width"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "objectName",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "en": "IPTC ObjectName"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "category",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "en": "IPTC Category"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "publications",
                "fieldType": "set<publication>",
                "name": {
                    "strings": {
                        "en": "Publications"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "status",
                "fieldType": "enum<org.taktik.defiris.constants.Medias$Status>",
                "name": {
                    "strings": {
                        "en": "Status"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            }
        ]
    },
    {
        "identifier": "video",
        "name": {
            "strings": {
                "en": "Video",
                "fr": "Vidéo",
                "nl": "Video"
            }
        },
        "superType": "media",
        "traits": [],
        "fields": []
    },
    {
        "identifier": "list",
        "name": {
            "strings": {
                "en": "List",
                "fr": "Liste",
                "nl": "Lijst"
            }
        },
        "superType": "media",
        "traits": [],
        "fields": [
            {
                "identifier": "listItems",
                "fieldType": "list<item>",
                "name": {
                    "strings": {
                        "en": "List items"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            }
        ]
    },
    {
        "identifier": "principal",
        "name": {
            "strings": {
                "en": "Principal",
                "fr": "Principal",
                "nl": "Principal"
            }
        },
        "traits": [],
        "fields": [
            {
                "identifier": "roles",
                "fieldType": "set<uuid>",
                "name": {
                    "strings": {
                        "en": "Roles"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": []
            }
        ]
    },
    {
        "identifier": "folder",
        "name": {
            "strings": {
                "en": "Folder",
                "fr": "Dossier",
                "nl": "Folder"
            }
        },
        "superType": "media",
        "traits": [],
        "fields": []
    },
    {
        "identifier": "audio",
        "name": {
            "strings": {
                "en": "Audio file",
                "fr": "Fichier audio",
                "nl": "Geluidsbestand"
            }
        },
        "superType": "media",
        "traits": [],
        "fields": []
    },
    {
        "identifier": "stock",
        "name": {
            "strings": {
                "en": "Stock"
            }
        },
        "superType": "item",
        "traits": [],
        "fields": []
    },
    {
        "identifier": "tags.custom",
        "name": {
            "strings": {
                "en": "Custom tags",
                "fr": "Custom tags",
                "nl": "Custom tags"
            }
        },
        "traits": [],
        "fields": [
            {
                "identifier": "downloadable",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "pl": "Downloadable",
                        "en": "Downloadable"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": false,
                "overridable": false,
                "constraints": [
                    {
                        "values": [
                            "Oczekujące",
                            "Nie",
                            "Tak"
                        ],
                        "$type": "RestrictedConstraint"
                    }
                ]
            },
            {
                "identifier": "production.date",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "pl": "Data produkcji",
                        "en": "Production Date"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": [
                    {
                        "regexp": "^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$",
                        "$type": "RegexpConstraint"
                    }
                ]
            },
            {
                "identifier": "destination.group",
                "fieldType": "set<string>",
                "name": {
                    "strings": {
                        "pl": "Grupa docelowa",
                        "en": "Destination group"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "field.of.science",
                "fieldType": "set<string>",
                "name": {
                    "strings": {
                        "pl": "Dziedzina nauki",
                        "en": "Field of science"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": [
                    {
                        "constraint": {
                            "values": [
                                "dziedzina nauk leśnych",
                                "dziedzina nauk biologicznych",
                                "dziedzina nauk weterynaryjnych",
                                "dziedzina nauk społecznych",
                                "dziedzina sztuk filmowych",
                                "dziedzina nauk o Ziemi",
                                "dziedzina nauk teologicznych",
                                "dziedzina sztuk muzycznych",
                                "dziedzina nauk technicznych",
                                "dziedzina nauk o kulturze fizycznej",
                                "dziedzina nauk farmaceutycznych",
                                "dziedzina sztuk teatralnych",
                                "dziedzina nauk ekonomicznych",
                                "dziedzina nauk medycznych",
                                "dziedzina nauk humanistycznych",
                                "dziedzina nauk fizycznych",
                                "dziedzina nauk o zdrowiu",
                                "dziedzina nauk matematycznych",
                                "dziedzina sztuk plastycznych",
                                "dziedzina nauk chemicznych",
                                "dziedzina nauk rolniczych",
                                "dziedzina nauk prawnych",
                                "Dziedzina nauki"
                            ],
                            "$type": "RestrictedConstraint"
                        },
                        "$type": "ElementsConstraint"
                    }
                ]
            },
            {
                "identifier": "confidentiality",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "pl": "Poufne",
                        "en": "Confidentiality"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": [
                    {
                        "values": [
                            "Poufne",
                            "Nie poufne"
                        ],
                        "$type": "RestrictedConstraint"
                    }
                ]
            },
            {
                "identifier": "length",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "pl": "Długość nagrania",
                        "en": "Length"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "srt.key",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "pl": "SRT key",
                        "en": "SRT key"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "language",
                "fieldType": "set<string>",
                "name": {
                    "strings": {
                        "pl": "Język",
                        "en": "Language"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": [
                    {
                        "constraint": {
                            "values": [
                                "francuski",
                                "hiszpański",
                                "rosyjski",
                                "polski",
                                "angielski",
                                "niemiecki"
                            ],
                            "$type": "RestrictedConstraint"
                        },
                        "$type": "ElementsConstraint"
                    }
                ]
            },
            {
                "identifier": "file.origin",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "pl": "Pochodzenie materiału",
                        "en": "File Origin"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "content.type",
                "fieldType": "set<string>",
                "name": {
                    "strings": {
                        "pl": "Typ Materiału",
                        "en": "Content Type"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "public",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "pl": "Public",
                        "en": "Public"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": [
                    {
                        "values": [
                            "Oczekujące",
                            "Nie",
                            "Tak"
                        ],
                        "$type": "RestrictedConstraint"
                    }
                ]
            },
            {
                "identifier": "organization",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "en": "Organization",
                        "fr": "Organisation",
                        "pl": "Organizacja"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": [
                    {
                        "values": [
                            "Uniwersytet Medyczny im. Piastów Śląskich we Wrocławiu",
                            "Instytut Badań Systemowych PAN w Warszawie",
                            "Politechnika Wrocławska",
                            "Akademia Wychowania Fizycznego we Wrocławiu",
                            "Uniwersyet Przyrodniczy we Wrocławiu"
                        ],
                        "$type": "RestrictedConstraint"
                    }
                ]
            },
            {
                "identifier": "producer",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "pl": "Producent",
                        "en": "Producer"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "publisher",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "pl": "Wydawca",
                        "en": "Publisher"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "rights.lincenses",
                "fieldType": "string",
                "name": {
                    "strings": {
                        "pl": "Prawa/Licencja",
                        "en": "Rights/Licenses"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            },
            {
                "identifier": "authors",
                "fieldType": "set<string>",
                "name": {
                    "strings": {
                        "pl": "Autorzy",
                        "en": "Authors"
                    }
                },
                "indexed": true,
                "stored": true,
                "readOnly": false,
                "serverSide": false,
                "inQuickSearch": true,
                "overridable": false,
                "constraints": []
            }
        ]
    }
]